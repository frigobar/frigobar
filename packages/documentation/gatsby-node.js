/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const docgen = require('react-docgen-typescript');
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const component = path.resolve(`./src/templates/component.tsx`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___title], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                menu
              }
              body
            }
          }
        }
        allFile(filter: { absolutePath: { regex: "/^.*core.*.tsx$/" } }) {
          edges {
            node {
              absolutePath
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create components pages.
    const components = result.data.allMdx.edges;
    const componentFiles = result.data.allFile.edges;

    const componentPaths = componentFiles.map(
      ({ node: { absolutePath } }) => absolutePath,
    );

    const options = {
      propFilter: prop => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find(
            declaration => {
              return !declaration.fileName.includes('node_modules');
            },
          );

          return Boolean(hasPropAdditionalDescription);
        }

        return true;
      },
    };

    const componentsDoc = docgen.parse(componentPaths, options);

    const categories = components.map(item => {
      const category = item.node.frontmatter.menu;
      return category;
    });

    const uniqueCategories = [...new Set(categories)].filter(uniq => uniq);

    const navigationMenu = components.map(item => {
      const name = item.node.frontmatter.title;
      const category = item.node.frontmatter.menu;
      const url = item.node.fields.slug.toLowerCase();

      return {
        name,
        category,
        url,
      };
    });

    components.forEach(post => {
      createPage({
        path: post.node.fields.slug.toLowerCase(),
        component,
        context: {
          slug: post.node.fields.slug,
          name: post.node.frontmatter.title,
          categories: uniqueCategories,
          navigation: navigationMenu,
          docs: componentsDoc,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
    createNodeField({
      name: 'name',
      node,
      value: node.frontmatter.title,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [
        plugins.provide({ process: 'process/browser' }),
        new webpack.ProvidePlugin({
          Buffer: [require.resolve('buffer/'), 'Buffer'],
        }),
        new NodePolyfillPlugin(),
      ],
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
      },
    },
  });
};
