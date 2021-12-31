function App(props) {
  const animation = 'test';
  const anotherAnimation = 'test';
  const buttonRef = 'ref';
  return (
    <div
      animation={[animation, anotherAnimation]}
      otherProp="otherProp"
      newProp="newProp"
    >
      Hello world
    </div>
  );
}
