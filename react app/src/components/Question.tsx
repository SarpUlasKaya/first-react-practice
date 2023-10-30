import Button from "./Button";
import "../css/style.css";

interface Props {
  imgUrl: string;
  qIndex: number;
  onClickYes: () => void;
  onClickNo: () => void;
}

function Question({ imgUrl, qIndex, onClickYes, onClickNo }: Props) {
  return (
    <div className="card">
      <h1>Question {qIndex}</h1>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <p className="card-text">Do you pull the lever?</p>
      <div className="card-body">
        <Button onClick={onClickYes} color="success">
          Yes
        </Button>
        <Button onClick={onClickNo} color="danger">
          No
        </Button>
      </div>
    </div>
  );
}

export default Question;
