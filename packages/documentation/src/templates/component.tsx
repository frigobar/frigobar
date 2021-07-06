import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import {
  Seo,
  Navigation,
  Header,
  Footer,
  PropsTable,
  PropsTableProvider,
} from '../components';
import { Grid, Button } from './styles';

import ComponentProvider from '../contexts/component';
import { fallbackState } from '../components/PropsTable/PropsTableContext';

const Content = styled.div`
  grid-area: content;

  margin: 0 auto;

  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
`;

export interface Component {
  description: string;
  displayName: string;
  filePath: string;
  props: { [key: string]: unknown } | undefined;
}

interface ComponentTemplateType {
  data: {
    mdx: {
      excerpt: string;
      body: string;
      frontmatter: {
        title: string;
        date: string;
      };
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: {
    categories: Array<string>;
    navigation: Array<{ name: string; category: string; url: string }>;
    docs: Array<Component>;
  };
}

function ComponentTemplate({
  data,
  pageContext: { categories = [], navigation = [], docs = [] },
}: ComponentTemplateType): JSX.Element {
  const [show, toggleShow] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const component = data.mdx;

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

  const currentComponent =
    docs.find(doc => doc.displayName === component.frontmatter.title) ||
    fallbackState.current;

  const subComponents = docs.filter(
    doc =>
      doc.displayName !== component.frontmatter.title &&
      doc.displayName.includes(component.frontmatter.title),
  );

  const description = component?.excerpt || currentComponent?.description;

  function handleMenu() {
    toggleShow(!show);
  }

  const handleClickAway = useCallback(event => {
    if (
      navigationRef &&
      navigationRef.current &&
      buttonRef &&
      buttonRef.current
    ) {
      if (
        !navigationRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        toggleShow(false);
      }
    }
  }, []);

  useEffect(() => {
    if (show) {
      window.addEventListener('click', handleClickAway);
    } else {
      window.removeEventListener('click', handleClickAway);
    }

    return () => window.removeEventListener('click', handleClickAway);
  }, [show, handleClickAway]);

  return (
    <Grid>
      <Seo title={component.frontmatter.title} description={description} />
      <Header show={show} />
      <Button show={show} onClick={handleMenu} ref={buttonRef}>
        <svg width="20" height="20" viewBox="0 0 12 12">
          <path d="M2.5 3.5C2.77614 3.5 3 3.27614 3 3C3 2.72386 2.77614 2.5 2.5 2.5C2.22386 2.5 2 2.72386 2 3C2 3.27614 2.22386 3.5 2.5 3.5Z" />
          <path d="M4.5 2.5C4.22386 2.5 4 2.72386 4 3C4 3.27614 4.22386 3.5 4.5 3.5H10C10.2761 3.5 10.5 3.27614 10.5 3C10.5 2.72386 10.2761 2.5 10 2.5H4.5Z" />
          <path d="M4 6C4 5.72386 4.22386 5.5 4.5 5.5H10C10.2761 5.5 10.5 5.72386 10.5 6C10.5 6.27614 10.2761 6.5 10 6.5H4.5C4.22386 6.5 4 6.27614 4 6Z" />
          <path d="M2.5 6.5C2.77614 6.5 3 6.27614 3 6C3 5.72386 2.77614 5.5 2.5 5.5C2.22386 5.5 2 5.72386 2 6C2 6.27614 2.22386 6.5 2.5 6.5Z" />
          <path d="M4 9C4 8.72386 4.22386 8.5 4.5 8.5H10C10.2761 8.5 10.5 8.72386 10.5 9C10.5 9.27614 10.2761 9.5 10 9.5H4.5C4.22386 9.5 4 9.27614 4 9Z" />
          <path d="M2.5 9.5C2.77614 9.5 3 9.27614 3 9C3 8.72386 2.77614 8.5 2.5 8.5C2.22386 8.5 2 8.72386 2 9C2 9.27614 2.22386 9.5 2.5 9.5Z" />
        </svg>
      </Button>
      <Navigation show={show} items={navigationItems} ref={navigationRef} />
      <ComponentProvider
        value={{
          name: component.frontmatter.title,
          props: currentComponent?.props,
        }}
      >
        <PropsTableProvider
          initialState={{
            allComponents: docs,
            current: currentComponent,
            subComponents,
          }}
        >
          <Content>
            <div>
              <h1>{component.frontmatter.title}</h1>
              {currentComponent && <p>{currentComponent.description}</p>}
              <MDXRenderer>{component.body}</MDXRenderer>
              {Boolean(currentComponent) && (
                <>
                  <PropsTable />
                </>
              )}
            </div>
          </Content>
        </PropsTableProvider>
      </ComponentProvider>
      <Footer />
    </Grid>
  );
}

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
