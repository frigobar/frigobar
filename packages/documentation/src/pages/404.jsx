import React from 'react';
import PropTypes from 'prop-types';

import { Layout, SEO } from '../components';

function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

NotFoundPage.propTypes = {
  location: PropTypes.string,
};

NotFoundPage.defaultProps = {
  location: 'pt-BR',
};

export default NotFoundPage;
