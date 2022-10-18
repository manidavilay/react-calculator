const Digits = (props) => {
  return (
    <div className="digits">
      {props.createDigits()}
      <button onClick={() => props.updateCalc("0")}>0</button>
      <button onClick={() => props.updateCalc(".")}>.</button>

      <button onClick={props.calculate}>=</button>
    </div>
  );
};

export default Digits;
