import React from 'react';
import { useComponent } from '../../contexts/component';

import { Wrapper } from './styles';

interface IPropertiesList {
  name: string;
}

const Checkbox = ({ propName, onPropChange, type, ...props }) => (
  <input
    onChange={event => {
      onPropChange({ prop: propName, newValue: event.target.checked, type });
    }}
    type="checkbox"
    {...props}
  />
);
const Input = ({ propName, onPropChange, type, ...props }) => (
  <input
    onChange={event => {
      onPropChange({ prop: propName, newValue: event.target.value, type });
    }}
    type="text"
    {...props}
  />
);
const InputNumber = ({ propName, onPropChange, type, ...props }) => (
  <input
    onChange={event => {
      onPropChange({ prop: propName, newValue: event.target.value, type });
    }}
    type="number"
    {...props}
  />
);
const TextArea = ({ propName, onPropChange, type, ...props }) => (
  <textarea
    onChange={event => {
      onPropChange({ prop: propName, newValue: event.target.value, type });
    }}
    {...props}
  />
);
const Select = ({ propName, onPropChange, type, ...props }) => (
  <select
    onChange={event => {
      onPropChange({ prop: propName, newValue: event.target.value, type });
    }}
    {...props}
  />
);

const componentMap = {
  boolean: Checkbox,
  string: Input,
  function: TextArea,
  list: Select,
  number: InputNumber,
};

const reactPropTypeMap = {
  list: 'string',
  string: 'string',
  number: 'bracket',
  function: 'bracket',
};

const propTypeCharMap = {
  opening: {
    string: '"',
    bracket: '{',
  },
  closing: {
    string: '"',
    bracket: '}',
  },
};

const getType = (type: string) => {
  if (type.includes('|')) {
    return {
      type: 'list',
      items: type.split('|').map(t => t.replace(/"|\s/g, '')),
    };
  }

  if (type.includes('=>')) {
    return { type: 'function' };
  }

  return { type };
};

const changeProp = ({ code, prop, type, newValue }) => {
  if (type === 'boolean') {
    const addRegex = new RegExp(`(<(?!\/).*?(?!>).*)>`);
    return newValue
      ? code.replace(addRegex, `$1 ${prop}>`)
      : code.replaceAll(` ${prop}`, '');
  }

  const codeAlreadyHasProp = code.includes(`${prop}=`);
  const propType = reactPropTypeMap[type];
  const openingChar = propTypeCharMap.opening[propType];
  const closingChar = propTypeCharMap.closing[propType];

  if (codeAlreadyHasProp) {
    const regex = new RegExp(`(${prop}=${openingChar})(.*?)(${closingChar}+)`);
    const newCode = code.replace(regex, `$1${newValue}$3`);

    return newCode;
  }

  const regex = new RegExp(`(<(?!\/).*?(?!>).*)>`);
  const newCode = code.replace(
    regex,
    `$1 ${prop}=${openingChar}${newValue}${closingChar}>`,
  );
  return newCode;
};

const PropsSwitcher = ({
  currentCode,
  onPropChange,
  ...rest
}: {
  currentCode: string;
}) => {
  const {
    props: { animation, css, ...props },
  } = useComponent();

  const handlePropChange = ({ prop, type, newValue }) => {
    const newCode = changeProp({ code: currentCode, prop, type, newValue });
    onPropChange(newCode);
  };

  const propertiesList = Object.keys(props).reduce<IPropertiesList[]>(
    (previous, current) => {
      const { type, items } = getType(props[current].type.name);
      const obj = {
        name: current,
        Component: componentMap[type],
        defaultValue: props[current].defaultValue?.value,
        type,
        items,
      };
      previous.push(obj);
      return previous;
    },
    [],
  );
  return (
    <Wrapper {...rest}>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {propertiesList.map(
            ({ name, Component, items, type, defaultValue }) => {
              if (items && Boolean(items.length)) {
                return (
                  <tr>
                    <td>{name}</td>
                    <td>
                      <Component
                        propName={name}
                        type={type}
                        onPropChange={handlePropChange}
                      >
                        <option disabled selected>
                          default value: {defaultValue}
                        </option>
                        {items.map(option => (
                          <option value={option}>{option}</option>
                        ))}
                      </Component>
                    </td>
                  </tr>
                );
              }
              if (Component) {
                return (
                  <tr>
                    <td>{name}</td>
                    <td>
                      <Component
                        propName={name}
                        type={type}
                        onPropChange={handlePropChange}
                      />
                    </td>
                  </tr>
                );
              }
            },
          )}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default PropsSwitcher;
