import React from 'react';
import { useComponent } from '../../contexts/component';

import Table, { IPropertiesList, INewCode, typesEnum } from './Table';
import {
  Wrapper,
  Input,
  InputNumber,
  Checkbox,
  TextArea,
  Select,
} from './styles';

interface IChangeProps extends INewCode {
  code: string;
}

interface IPropsSwitcherProps {
  currentCode: string;
  onPropChange: (newCode: string) => void;
}

const componentMap = {
  boolean: Checkbox,
  string: Input,
  function: TextArea,
  list: Select,
  number: InputNumber,
};

const propTypeMap = {
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

const getType = (
  type: IPropertiesList['type'],
): {
  type: IPropertiesList['type'];
  items?: IPropertiesList['items'];
} => {
  if (type.includes('|')) {
    return {
      type: typesEnum.List,
      items: type.split('|').map(t => t.replace(/"|\s/g, '')),
    };
  }

  if (type.includes('=>')) {
    return { type: typesEnum.Function };
  }

  return { type };
};

const changeProp = ({ code, prop, type, newValue }: IChangeProps) => {
  const addRegex = new RegExp(`(<(?!\/).*?)>`, 'm');
  if (type === typesEnum.Boolean) {
    return newValue
      ? code.replace(addRegex, `$1 ${prop}>`)
      : code.replaceAll(` ${prop}`, '');
  }
  const currentPropertyType = propTypeMap[type];
  const openingChar = propTypeCharMap.opening[currentPropertyType];
  const closingChar = propTypeCharMap.closing[currentPropertyType];
  const codeAlreadyHasProp = code.includes(`${prop}=`);

  if (codeAlreadyHasProp) {
    const replaceRegex = new RegExp(
      `(\\s*?${prop}=${openingChar})(.*?)(${closingChar})`,
    );
    const newCode = code.replace(
      replaceRegex,
      newValue ? `$1${newValue}$3` : '',
    );

    return newCode;
  }

  const newCode = code.replace(
    addRegex,
    `$1 ${prop}=${openingChar}${newValue}${closingChar}>`,
  );
  return newCode;
};

const PropsSwitcher = ({
  currentCode,
  onPropChange,
  ...rest
}: IPropsSwitcherProps) => {
  const {
    //@ts-ignore
    props: { animation, css, ...props },
  } = useComponent();

  const handlePropChange = ({ prop, type, newValue }: INewCode) => {
    const newCode = changeProp({ code: currentCode, prop, type, newValue });
    onPropChange(newCode);
  };

  const propertiesList = Object.keys(props).reduce<IPropertiesList[]>(
    (previous, current) => {
      const { type, items } = getType(props[current].type.name);
      const propertyObj = {
        name: current,
        Component: componentMap[type],
        defaultValue: props[current].defaultValue?.value,
        type,
        items,
      };
      previous.push(propertyObj);
      return previous;
    },
    [],
  );
  return (
    <Wrapper {...rest}>
      <Table
        propertiesList={propertiesList}
        handlePropChange={handlePropChange}
      />
    </Wrapper>
  );
};

export default PropsSwitcher;
