import React from 'react';
import { Alert } from '@frigobar/core';

import { Wrapper, Table, Thead, Tbody, Th, Tr, Td } from './styles';
import { usePropsTable } from './PropsTableContext';

function Props({ name, properties }) {
  if (!name) {
    return null;
  }

  const propKeys = Object.keys(properties).filter(
    key => key !== 'animation' && key !== 'css',
  );

  return (
    <div>
      <h3>{name} props</h3>
      <Wrapper>
        {Boolean(propKeys.length) ? (
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
              {propKeys.map(key => (
                <Tr key={key}>
                  <Td>{key}</Td>
                  <Td>{properties[key].description}</Td>
                  <Td>{properties[key].type?.name}</Td>
                  <Td>{properties[key].defaultValue?.value || '-'}</Td>
                  <Td>{String(properties[key].required)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Alert show type="warning">
            No props for this component
          </Alert>
        )}
      </Wrapper>
    </div>
  );
}

function PropsTable(): JSX.Element {
  const [{ current, subComponents }] = usePropsTable();
  const { displayName: parentName, props: parentProps } = current;

  const sortedSubComponents =
    (Boolean(subComponents.length) &&
      subComponents.sort((a, b) =>
        a.displayName.localeCompare(b.displayName),
      )) ||
    [];

  return (
    <div>
      <Props name={parentName} properties={parentProps} />
      {Boolean(sortedSubComponents) &&
        sortedSubComponents.map(
          ({ displayName: childName, props: childProps }) => (
            <Props key={childName} name={childName} properties={childProps} />
          ),
        )}
    </div>
  );
}

Props.defaultProps = {
  properties: undefined,
};

export default PropsTable;
