function App(props) {
  const animation = 'test';
  return (
    <div
      otherProp="otherProp"
      newProp="newProp"
      css={`
        animation: ${animation};
      `}
    >
      Hello world
    </div>
  );
}
