const Operators = (props) => {
    return (
      <div className="operators">
        <button className="operators__button" onClick={() => props.updateCalc("/")}>/</button>
        <button className="operators__button" onClick={() => props.updateCalc("*")}>*</button>
        <button className="operators__button" onClick={() => props.updateCalc("+")}>+</button>
        <button className="operators__button" onClick={() => props.updateCalc("-")}>-</button>
  
        <button className="operators__button" onClick={props.deleteLast}>DEL</button>
      </div>
    );
  };
  
  export default Operators;