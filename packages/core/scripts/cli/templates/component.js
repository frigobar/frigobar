const index = name => `import ${name} from './${name}';

export default ${name};
`;

const component = name => `import React from 'react';
import styled from 'styled-components';

const Styled${name} = styled.div\`\`;

const ${name} = props => <Styled${name} {...props} />;

${name}.propTypes = {};

${name}.defaultProps = {};

export default ${name};
`;

module.exports = {
  index,
  component,
};
