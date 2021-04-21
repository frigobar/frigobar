import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Query from './query';
import { Wrapper, Table, Thead, Tbody, Th, Tr, Td, List } from './styles';

function PropsTable({ component, properties }) {
  const [propss, setProps] = useState([]);

  if (!properties && component && !propss.length) {
    const {
      allComponentMetadata: { edges },
    } = Query();

    const [componentProps] = edges.filter(
      ({ node }) => node.displayName === component,
    );

    const {
      node: { props: componentProp },
    } = componentProps;

    setProps(componentProp);
  }

  const componentProps = properties || propss;

  return (
    <Wrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Description</Th>
            <Th>Type</Th>
            <Th>Default value</Th>
            <Th>Required</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Boolean(componentProps.length) &&
            componentProps.map(
              ({ name, required, type, description, defaultValue }) => (
                <Tr key={name}>
                  <Td>{name && name}</Td>
                  <Td>{description && description.text}</Td>
                  <Td>
                    {type && type.name}
                    {type && Array.isArray(type.value) && (
                      <List>
                        {type.value.map(val => (
                          <li key={val.value}>{val.value.replace(/'/g, '')}</li>
                        ))}
                      </List>
                    )}
                  </Td>
                  <Td>
                    {defaultValue
                      ? defaultValue.value.replace(/'/g, '')
                      : 'undefined'}
                  </Td>
                  <Td>{String(required)}</Td>
                </Tr>
              ),
            )}
        </Tbody>
      </Table>
    </Wrapper>
  );
}

PropsTable.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({})),
  component: PropTypes.string,
};

PropsTable.defaultProps = {
  properties: undefined,
  component: undefined,
};

export default PropsTable;
