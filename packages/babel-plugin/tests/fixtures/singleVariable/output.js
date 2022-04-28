function App(props) {
  const animation = 'test';
  const rest = {
    'data-foo': 'foo',
    'data-bar': 'bar',
  };
  return (
    <div
      otherProp="otherProp"
      newProp="newProp"
      {...rest}
      css={`
        animation: ${animation};
      `}
    >
      Hello world
    </div>
  );
}
