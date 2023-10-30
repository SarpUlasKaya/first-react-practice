import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Question from "./components/Question";

function App() {
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  return (
    <div>
      <Question
        imgUrl=""
        qIndex={1}
        onClickYes={() => setYesCount(yesCount + 1)}
        onClickNo={() => setNoCount(noCount + 1)}
      />
    </div>
  );
}

export default App;
