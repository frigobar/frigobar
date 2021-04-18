const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const component = path.resolve(`./src/templates/component.jsx`);
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
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create components pages.
    const components = result.data.allMdx.edges;
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
          categories: uniqueCategories,
          navigation: navigationMenu,
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
  }
};
