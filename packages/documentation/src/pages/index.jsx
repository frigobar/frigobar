import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { useFlash, useFade } from '@frigobar/animation';

import { Header, Footer } from '../components';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: min-content auto min-content;
  height: 100%;
`;

const Card = styled.div(
  ({ theme: { colors, spacings } }) => `
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;

    padding: ${spacings.large}px;

    background-color: ${colors.primary[50]};
    &:hover {
      background-color: ${colors.primary[100]};
    }

    &:nth-child(2) {
      background-color: ${colors.primary[200]};

      &:hover {
        background-color: ${colors.primary[300]};
      }
    }

    transition: background-color 0.3s ease;

    a {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      text-decoration: none;
      color: inherit;
    }
  `,
);

const Main = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
`;

const Cards = styled.section`
  display: flex;
  flex-direction: column;

  height: 100%;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  margin: 0;

  font-size: 3rem;
  font-weight: 300;
  text-align: center;
`;

const Index = () => {
  const [{ animation: fadeAnimation }] = useFade();
  const [{ animation: flashAnimation }] = useFlash({
    start: true,
    infinity: true,
    duration: 600,
  });

  return (
    <Wrapper
      css={`
        animation: ${fadeAnimation};
      `}
    >
      <Header />
      <Main>
        <div
          style={{
            backgroundColor: '#ccc',
            height: 480,
            width: '100%',
            flexShrink: 0,
          }}
        />
        <Cards>
          <Card>
            <Link to="/animation/getting-started/">
              <Title
                css={`
                  animation: ${flashAnimation};
                `}
              >
                Animation
              </Title>
              Animation Hooks to bring some fancy moves for your components
            </Link>
          </Card>
          <Card>
            <Link to="/components/getting-started/">
              <Title>Components</Title>A collection of simple UI components made
              with React
            </Link>
          </Card>
        </Cards>
      </Main>
      <Footer />
    </Wrapper>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
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
