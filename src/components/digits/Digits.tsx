import "./Digits.scss";

type Props = {
  createDigits: () => JSX.Element[];
  updateCalc: (value: string) => void;
  calculate: () => void;
};

const Digits = ({ createDigits, updateCalc, calculate }: Props) => {
  return (
    <div className="digits">
      <div className="digits__container">
        {createDigits()}
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>

    </div>
  );
};

export default Digits;
