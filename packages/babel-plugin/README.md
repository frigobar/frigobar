# `@frigobar/babel-plugin`

A recommended babel plugin for `@frigobar/animation` hooks.

With this plugin you can use the animation hooks with a simple prop on your
components.

Before:

```jsx
import { useFade } from '@frigobar/animation';

const App = () => {
  const [{ animation }] = useFade();

  return (
    <div
      css={`
        animation: ${animation};
      `}
    >
      fade
    </div>
  );
};

// or

const StyledDiv = styled.div`
  animation: ${props => props.myAnimation};
`;

const App = () => {
  const [{ animation }] = useFade();

  return <div myAnimation={animation}>fade</div>;
};
```

With this plugin:

```jsx
import { useFade } from '@frigobar/animation';

const App = () => {
  const [{ animation }] = useFade();

  return <div animation={animation}>fade</div>;
};
```

> You still can use any of the previous options to apply the css animation.

## Install

Install the plugin first:

```
npm install --save-dev @frigobar/babel-plugin
```

Then add it to your babel configuration:

```
{
  "plugins": ["@frigobar/babel-plugin", "babel-plugin-styled-components"]
}
```

> Make sure to also install the
> [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components)
