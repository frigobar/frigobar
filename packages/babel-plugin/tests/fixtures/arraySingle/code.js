function App(props) {
  const animation = 'test';
  return (
    <div animation={[animation]} otherProp="otherProp" newProp="newProp">
      Hello world
    </div>
  );
}
