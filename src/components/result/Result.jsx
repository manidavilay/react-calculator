import "./Result.scss";

const Result = (props) => {
    return (
      <div className="result">
        {props.result ? <span>({props.result})</span> : ""}&nbsp; {props.calc || "0"}
      </div>
    );
  };
  
  export default Result;
  