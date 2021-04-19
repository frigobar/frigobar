import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Table, Thead, Tbody, Th, Tr, Td, List } from './styles';

function PropsTable({ properties }) {
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
          {Boolean(properties.length) &&
            properties.map(
              ({ name, required, type, description, defaultValue }) => (
                <Tr key={name}>
                  <Td>{name && name}</Td>
                  <Td>{description && description.text}</Td>
                  <Td>
                    {type && type.name}
                    {Array.isArray(type.value) && (
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
};

PropsTable.defaultProps = {};

export default PropsTable;
