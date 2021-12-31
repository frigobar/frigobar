import React, { useRef, useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { Button } from '@frigobar/core';
import {
  useFade,
  useFadeAnimation,
  useColorAnimation,
} from '@frigobar/animation';

import { Header, Footer, Seo } from '../components';
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
} from '../components/Home/styles';

const Index = (): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [
    fadeAnimation,
    animationState,
    instantState,
    toggle,
  ] = useFadeAnimation({
    startOnRender: true,
    duration: 1000,
    onAnimationEnd: e => console.log(e),
  });

  console.log(animationState);

  const [colorAnimation, colorState, _, toggleColor] = useColorAnimation({
    onAnimationEnd: e => console.log(e),
  });

  useEffect(() => {
    if (buttonRef.current) {
      console.log(buttonRef.current);
    }
  }, [buttonRef.current]);

  return (
    <Wrapper>
      <Seo
        title="Frigobar - A simple set of UI tools for your react application."
        titleTemplate=""
      />
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
        <Button
          onClick={() => {
            toggle(!animationState);
            toggleColor(!animationState);
          }}
        >
          Test
        </Button>
        {animationState && (
          <Button animation={[colorAnimation, fadeAnimation]}>
            fadded button
          </Button>
        )}

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
