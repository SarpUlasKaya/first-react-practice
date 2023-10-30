import Button from "./Button";

interface Props {
  imgUrl: string;
  qIndex: number;
  onClickYes: () => void;
  onClickNo: () => void;
}

const questionCardStyle = {
  width: "18rem",
};

function Question({ imgUrl, qIndex, onClickYes, onClickNo }: Props) {
  return (
    <div className="card" style={questionCardStyle}>
      <h1>Question {qIndex}</h1>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Do you pull the lever?</p>
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
