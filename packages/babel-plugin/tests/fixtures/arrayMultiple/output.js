function App(props) {
  const animation = 'dsadsa ddsad dsad';
  const animation2 = 'test';
  return (
    <div
      otherProp="otherProp"
      newProp="newProp"
      css={`
        animation: ${animation}, ${animation2};
      `}
    >
      Hello world
    </div>
  );
}
