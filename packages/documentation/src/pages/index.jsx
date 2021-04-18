import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Button } from '@frigobar/core';
import { useFade } from '@frigobar/animation';

import { Layout } from '../components';

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [{ animation, state }, toggle] = useFade();

  return (
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
    allMdx(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
