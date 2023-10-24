import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
//import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>ALERT</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

/*
function App() {
  return (
    <div>
      <Alert>
        EXTREME <span>DANGER</span>
      </Alert>
    </div>
  );
}

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        header="List of Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
*/

export default App;
