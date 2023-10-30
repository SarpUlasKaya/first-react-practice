import { useState } from "react";
import Question from "./components/Question";
import { images } from "./images";

function App() {
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  return (
    <div>
      <Question
        imgUrl={images[0]}
        qIndex={1}
        onClickYes={() => setYesCount(yesCount + 1)}
        onClickNo={() => setNoCount(noCount + 1)}
      />
    </div>
  );
}

export default App;
