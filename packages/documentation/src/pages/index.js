import React from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { theme } from '@frigobar/core';

import Layout from '../components/Layout';

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <ThemeProvider theme={theme}>
      <Layout title={siteTitle}>vishe</Layout>
    </ThemeProvider>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
