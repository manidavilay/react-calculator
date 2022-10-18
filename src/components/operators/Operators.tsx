import "./Operators.scss";

type Props = {
  updateCalc: (value: string) => void;
  deleteLast: () => void;
};

const Operators = ({ updateCalc, deleteLast }: Props) => {
    return (
      <div className="operators">
        <button className="operators__button" onClick={() => updateCalc("/")}>/</button>
        <button className="operators__button" onClick={() => updateCalc("*")}>*</button>
        <button className="operators__button" onClick={() => updateCalc("+")}>+</button>
        <button className="operators__button" onClick={() => updateCalc("-")}>-</button>
  
        <button className="operators__button" onClick={deleteLast}>DEL</button>
      </div>
    );
  };
  
  export default Operators;