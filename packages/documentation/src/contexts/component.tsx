import React, { createContext, useContext } from 'react';

interface IProps {
  [key: string]: any;
}

interface IComponentContext {
  name: string;
  props: IProps;
}

const ComponentContext = createContext<IComponentContext>({
  name: '',
  props: {},
});
const ComponentProvider = props => <ComponentContext.Provider {...props} />;

const useComponent = () => {
  const context = useContext(ComponentContext);
  if (!context) {
    throw new Error('useComponent must be used with the ComponentProvider');
  }

  return context;
};

export { useComponent, ComponentContext };
export default ComponentProvider;
