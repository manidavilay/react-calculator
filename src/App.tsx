import { useState } from "react";
import Digits from "./components/digits/Digits";
import "./App.scss";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  // Create digitals
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  // Update calcul
  const updateCalc = (value: string) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  // Calculate
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  return (
    <div className="app">
      <div className="app__constructor">
        <Digits
          createDigits={createDigits}
          updateCalc={updateCalc}
          calculate={calculate}
        />
      </div>
    </div>
  );
}

export default App;
