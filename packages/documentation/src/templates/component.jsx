import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { SEO, Navigation, Header, Footer, PropsTable } from '../components';
import Grid from './styles';

import ComponentProvider from '../contexts/component';

const Content = styled.div`
  grid-area: content;

  margin: 0 auto;

  width: 100%;
  padding-right: 20px;
`;

function ComponentTemplate({
  data,
  pageContext: { categories = [], navigation = [] },
}) {
  const component = data.mdx;
  const metaData = data.componentMetadata;

  const navigationItems = categories.reduce((acc, category) => {
    navigation.forEach(item => {
      const [, section] = item.url.split('/');
      if (
        typeof window !== 'undefined' &&
        item.category === category &&
        window.location.pathname.search(section) !== -1
      ) {
        acc[category] = [...(acc[category] ? acc[category] : []), item];
      }
    });

    return acc;
  }, {});

  const description = component?.excerpt || metaData?.description?.text;

  return (
    <Grid>
      <SEO title={component.frontmatter.title} description={description} />
      <Header />
      <Navigation items={navigationItems} />
      <ComponentProvider
        value={{ name: component.frontmatter.title, props: metaData?.props }}
      >
        <Content>
          <div>
            <h1>{component.frontmatter.title}</h1>
            {metaData && <p>{metaData.description.text}</p>}
            <MDXRenderer>{component.body}</MDXRenderer>
            {Boolean(metaData?.props) && (
              <>
                <h3>{component.frontmatter.title} props</h3>
                <PropsTable properties={metaData.props} />
              </>
            )}
          </div>
        </Content>
      </ComponentProvider>
      <Footer />
    </Grid>
  );
}

ComponentTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      excerpt: PropTypes.string,
      body: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    componentMetadata: PropTypes.shape({
      description: PropTypes.shape({ text: PropTypes.string }),
      displayName: PropTypes.string,
      props: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          defaultValue: PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          }),
          description: PropTypes.shape({
            text: PropTypes.string,
          }),
          required: PropTypes.bool,
          type: PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.number,
              PropTypes.array,
              PropTypes.func,
              PropTypes.bool,
              PropTypes.object,
            ]),
          }),
        }),
      ),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string),
    navigation: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default ComponentTemplate;

export const pageQuery = graphql`
  query($slug: String!, $name: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        menu
      }
      body
    }
    componentMetadata(displayName: { eq: $name }) {
      props {
        name
        type {
          name
          value
        }
        required
        description {
          text
        }
        defaultValue {
          value
        }
      }
      displayName
      description {
        text
      }
    }
  }
`;
