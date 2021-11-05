import React from 'react';
import { INewCode, typesEnum } from './PropsSwitcher';

interface IComponentProps {
  propName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  type: INewCode['type'];
  defaultValue?: string;
}

export interface IPropertiesList {
  name: string;
  Component: (props: IComponentProps) => JSX.Element;
  items?: Array<string>;
  type: INewCode['type'];
  defaultValue: any;
}

function Table({
  propertiesList,
  handlePropChange,
}: {
  propertiesList: IPropertiesList[];
  handlePropChange: ({ prop, type, newValue }: INewCode) => void;
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <abbr title="component property">prop</abbr>
          </th>
          <th>control</th>
        </tr>
      </thead>
      <tbody>
        {propertiesList.map(
          ({ name, Component, items, type, defaultValue }) => {
            if (!Component) {
              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td>unsuported type</td>
                </tr>
              );
            }

            if (items && Boolean(items.length)) {
              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td>
                    <Component
                      propName={name}
                      type={type}
                      defaultValue={`default value: ${defaultValue}`}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handlePropChange({
                          prop: name,
                          type,
                          newValue: event.target.value,
                        })
                      }
                    >
                      <option disabled>default value: {defaultValue}</option>
                      {items.map(option => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </Component>
                  </td>
                </tr>
              );
            }
            return (
              <tr key={name}>
                <td>{name}</td>
                <td>
                  <Component
                    propName={name}
                    type={type}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handlePropChange({
                        prop: name,
                        type,
                        newValue:
                          type === typesEnum.Boolean
                            ? event.target.checked
                            : event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
}

export default Table;
