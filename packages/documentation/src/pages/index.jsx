import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { Card } from '@frigobar/core';
import { useFlash, useFade } from '@frigobar/animation';

import { Layout, Header, Footer } from '../components';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: min-content auto min-content;
  height: 100%;
`;

const Main = styled.main(
  ({ theme: { spacings } }) => `
    grid-area: content;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${spacings.large}px;

    ${Card} {
      margin-right: ${spacings.large}px;

      &:last-child {
        margin-right: 0;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    @media (max-width: 850px) {
      flex-direction: column;

      ${Card} {
        margin-right: 0;
        margin-bottom: ${spacings.large}px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  `,
);

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
`;

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [{ animation: fadeAnimation }] = useFade({
    startOnRender: true,
    fadeOut: false,
  });
  const [{ animation: flashAnimation }] = useFlash({
    start: true,
    infinity: true,
    duration: 600,
  });

  return (
    <Layout title={siteTitle}>
      <Wrapper
        css={`
          animation: ${fadeAnimation};
        `}
      >
        <Header />
        <Main>
          <Card maxWidth="400px">
            <Link to="/animation/getting-started/">
              <Card.Content>
                <Title
                  css={`
                    animation: ${flashAnimation};
                  `}
                >
                  Animation
                </Title>
                Animation Hooks to bring some fancy moves for your components
              </Card.Content>
            </Link>
          </Card>
          <Card maxWidth="400px">
            <Link to="/components/getting-started/">
              <Card.Content>
                <Title>Components</Title>A collection of simple UI components
                made with React
              </Card.Content>
            </Link>
          </Card>
        </Main>
        <Footer />
      </Wrapper>
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
