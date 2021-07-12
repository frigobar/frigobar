import React from 'react';

import { Wrapper, Table, Thead, Tbody, Th, Tr, Td } from './styles';
import { usePropsTable } from './PropsTableContext';

function Props({ name, properties }) {
  const propKeys = Object.keys(properties);

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
          <p>No props for this component</p>
        )}
      </Wrapper>
    </div>
  );
}

function PropsTable(): JSX.Element {
  const [{ current, subComponents }] = usePropsTable();
  const { displayName: parentName, props: parentPops } = current;

  const sortedSubComponents =
    (Boolean(subComponents.length) &&
      subComponents.sort((a, b) =>
        a.displayName.localeCompare(b.displayName),
      )) ||
    [];

  return (
    <div>
      <Props name={parentName} properties={parentPops} />
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
