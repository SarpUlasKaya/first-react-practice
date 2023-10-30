import { useState } from "react";
import Question from "./components/Question";
import Img1 from "./images/Q1.jpg";

function App() {
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  return (
    <div>
      <Question
        imgUrl={Img1}
        qIndex={1}
        onClickYes={() => setYesCount(yesCount + 1)}
        onClickNo={() => setNoCount(noCount + 1)}
      />
    </div>
  );
}

export default App;
