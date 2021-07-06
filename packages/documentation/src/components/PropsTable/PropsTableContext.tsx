import React, {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  ReactNode,
} from 'react';

import { Component } from '../../templates/component';

interface Action {
  type: 'SET_CURRENT';
  name: string;
}

interface State {
  allComponents: Array<Component>;
  current: Component;
  subComponents: Array<Component> | [];
}

type ContextType = [State, Dispatch<Action>];

const fallbackState: State = {
  allComponents: [],
  current: {
    description: '',
    displayName: '',
    filePath: '',
    props: {},
  },
  subComponents: [],
};

const Context = createContext<ContextType>([fallbackState, () => null]);

Context.displayName = 'PropsTableContext';

function propsTableReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_CURRENT': {
      const current =
        state.allComponents.find(
          component => component.displayName === action.name,
        ) || state.current;
      const subComponents =
        state.allComponents.filter(
          component =>
            component.displayName !== action.name &&
            component.displayName.includes(action.name),
        ) || state.subComponents;

      return {
        ...state,
        current,
        subComponents,
      };
    }
    default: {
      return state;
    }
  }
}

interface ProviderProps {
  children: ReactNode;
  initialState: State;
}

function PropsTableProvider({
  children,
  initialState,
}: ProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(propsTableReducer, initialState);

  const value: ContextType = [state, dispatch];

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function usePropsTable(): ContextType {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('usePropsTable must be used within a PropsTableProvider');
  }

  return context;
}

function setCurrent(dispatch: React.Dispatch<Action>, name: string): void {
  dispatch({
    type: 'SET_CURRENT',
    name,
  });
}

export { PropsTableProvider, usePropsTable, setCurrent, fallbackState };
