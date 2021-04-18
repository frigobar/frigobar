import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, SEO, Navigation, Header, Footer } from '../components';

const Content = styled.div`
  grid-area: content;
`;

function ComponentTemplate({
  data,
  pageContext: { categories = [], navigation = [] },
  location,
}) {
  const component = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const navigationItems = navigation
    .map(item => {
      if (categories.includes(item.category)) {
        const obj = {
          category: item.category,
          pages: [{ name: item.name, url: item.url }],
        };

        return obj;
      }

      return null;
    })
    .filter(item => item)
    .sort(item => (item.category === 'guide' ? -1 : 1));

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={component.frontmatter.title}
        description={component.excerpt}
      />
      <Header>header</Header>
      <Navigation items={navigationItems} />
      <Content>
        <h1>{component.frontmatter.title}</h1>
        <MDXRenderer>{component.body}</MDXRenderer>
      </Content>
      <Footer>footer</Footer>
    </Layout>
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
  query($slug: String!) {
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
  }
`;
