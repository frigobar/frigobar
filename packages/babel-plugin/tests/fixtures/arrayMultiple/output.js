function App(props) {
  const animation = 'dsadsa ddsad dsad';
  const animation2 = 'test';
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
        animation: ${animation}, ${animation2};
      `}
    >
      Hello world
    </div>
  );
}
