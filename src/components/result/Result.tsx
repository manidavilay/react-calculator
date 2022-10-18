import "./Result.scss";

type Props = {
  result: string;
  calc: string;
};

const Result = ({ result, calc }: Props) => {
    return (
      <div className="result">
        {result ? <span>({result})</span> : ""}&nbsp; {calc || "0"}
      </div>
    );
  };
  
  export default Result;
  