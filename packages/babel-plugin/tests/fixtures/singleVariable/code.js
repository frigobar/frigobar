function App(props) {
  const animation = 'test';
  const rest = {
    'data-foo': 'foo',
    'data-bar': 'bar',
  };
  return (
    <div
      animation={animation}
      otherProp="otherProp"
      newProp="newProp"
      {...rest}
    >
      Hello world
    </div>
  );
}
