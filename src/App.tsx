import { useState } from "react";
import Digits from "./components/digits/Digits";
import "./App.scss";
import Operators from "./components/operators/Operators";
import Result from "./components/result/Result";
import Footer from "./components/footer/Footer";

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
  const updateCalc = (value: string): void => {
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
  const calculate = (): void => {
    setCalc(eval(calc).toString());
  };

  // Delete last digit or value
  const deleteLast = (): void => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1); // remove the last value

    setCalc(value);

    if (ops.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0, -1)));
    } else {
      setResult(eval(value.toString()));
    }
  };

  return (
    <div className="app">
      <h1 className="app__title">Simple Calculator in React | TypeScript</h1>
      <div className="app__constructor">
        <Result result={result} calc={calc} />
        <Operators updateCalc={updateCalc} deleteLast={deleteLast} />
        <Digits
          createDigits={createDigits}
          updateCalc={updateCalc}
          calculate={calculate}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
