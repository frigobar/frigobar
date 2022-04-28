function App(props) {
  const animation = 'dsadsa ddsad dsad';
  const animation2 = 'test';
  const rest = {
    'data-foo': 'foo',
    'data-bar': 'bar',
  };
  return (
    <div
      animation={[animation, animation2]}
      otherProp="otherProp"
      newProp="newProp"
      {...rest}
    >
      Hello world
    </div>
  );
}
