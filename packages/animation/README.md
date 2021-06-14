# `@frigobar/animation`

Easily add CSS animation to your react components via custom
[hooks](https://reactjs.org/docs/hooks-custom.html).

> All the animations are created with
> [CSS Animations && @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

## Installation

You can install `@frigobar/animation` using either of the methods below.

For npm users:

```shell
npm install @frigobar/animation --save
```

For Yarn users:

```shell
yarn add @frigobar/animation
```

An important note is that the **styled-components** is a peerDependency
[see why](https://styled-components.com/docs/faqs#i-am-a-library-author-should-i-bundle-styledcomponents-with-my-library), if
you dont have styled-components installed you'll
[need to install](https://styled-components.com/docs/basics#installation).

## Usage

You can simply import the desired animation from the package and use it in any
component.

It's highly recommended to install the [babel-plugin](https://github.com/frigobar/frigobar/tree/master/packages/babel-plugin)
to use the `animation` prop to apply your animations.

Example:

```jsx
import { useFade } from '@frigobar/animation';

const App = () => {
  const [{ animation }] = useFade();

  return <div animation={animation}>fade</div>;
};
```

Example without `animation` prop:

```javascript
import React from 'react';
import { useFade } from '@frigobar/animation';

const Button = props => {
  const [{ animation }] = useFade({
    startOnRender: true,
  });

  return (
    <button
      {...props}
      css={`
        animation: ${animation};
      `}
    />
  );
};

export default Button;
```

## Animations

Every hook have an options object to customize some behavior of it, like
duration, when the animation starts, check current animation state, etc.

Also, provides a toggle function to change the state of the animation.

Here is the list with all the current animations provided by this package.

- useFade - Fade (in / out) effect
- useFlash - Flash effect
