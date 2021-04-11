import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Button, theme } from '@frigobar/core';
import { useFade } from '@frigobar/animation';

import Layout from '../components/Layout';

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [{ animation, state }, toggle] = useFade();

  return (
    <ThemeProvider theme={theme}>
      <Layout title={siteTitle}>
        <Button onClick={() => toggle(!state)}>Toggle</Button>
        {state && (
          <div
            css={`
              animation: ${animation};
              background-color: red;
              width: 200px;
              height: 200px;
            `}
          >
            Test
          </div>
        )}
      </Layout>
    </ThemeProvider>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Index;

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
