import Container from "./Container";
import Counter from "./Counter";

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    initalValue: 5,
  };
  return (
    <Container>
      <Counter {...counterProps} />
    </Container>
  );
}

export default App;
