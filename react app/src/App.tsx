import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={cities} header="List of Cities" />
    </div>
  );
}

export default App;
