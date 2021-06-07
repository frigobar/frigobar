import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Button } from '@frigobar/core';
import { useFade } from '@frigobar/animation';

import { Header, Footer } from '../components';
import {
  Wrapper,
  Main,
  Logo,
  Section,
  Title,
  Card,
  Description,
  Icon,
  StudyDesktop,
  StudyMobile,
} from './styles';

const Index = () => {
  const [{ animation: fadeAnimation }] = useFade();

  return (
    <Wrapper
      css={`
        animation: ${fadeAnimation};
      `}
    >
      <Header home />
      <Main>
        <Section>
          <div>
            <Logo src="/logo-text.svg" alt="Frigobar logo" />
            <Description big>
              A simple set of UI packages to simplify your life when building
              react applications.
            </Description>
          </div>
          <Card>
            <Icon src="/icons/dance.svg" />
            <div>
              <Title>Animation</Title>
              <div>
                <Description>
                  Animation Hooks to bring some fancy effects for your
                  components
                </Description>
                <Button
                  skin="primary"
                  rounded
                  large
                  as={Link}
                  to="/animation/getting-started/"
                >
                  Get started
                </Button>
              </div>
            </div>
          </Card>
        </Section>
        <Section>
          <StudyDesktop>
            <Title bordered>Study project</Title>
            <Description>
              The main objective of this project is learning, so,{' '}
              <strong>use it at your own risk</strong>.
            </Description>
          </StudyDesktop>
          <Card>
            <Icon src="/icons/stacked.svg" />
            <div>
              <Title>Components</Title>
              <div>
                <Description>
                  A collection of simple UI components made with React
                </Description>
                <Button
                  skin="primary"
                  rounded
                  large
                  as={Link}
                  to="/components/getting-started/"
                >
                  Get started
                </Button>
              </div>
            </div>
          </Card>
        </Section>
      </Main>
      <Footer home>
        <StudyMobile>
          <Title bordered>Study project</Title>
          <Description>
            The main objective of this project is learning, so,{' '}
            <strong>use it at your own risk</strong>.
          </Description>
        </StudyMobile>
      </Footer>
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
