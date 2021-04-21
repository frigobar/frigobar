import { useStaticQuery, graphql } from 'gatsby';

const Query = () =>
  useStaticQuery(graphql`
    query {
      allComponentMetadata(sort: { fields: displayName }) {
        edges {
          node {
            displayName
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
          }
        }
      }
    }
  `);

export default Query;
