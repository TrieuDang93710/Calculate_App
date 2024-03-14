import React, { createContext, useState } from "react";

export const QuantityContext = createContext();

export const ContextProvider = ({ children }) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [textRs, setTextRs] = useState("");
  const [result, setResult] = useState(0);

  let handleCalculate = (a, b, c) => {
    const deta = b * b - 4 * a * c;

    if (deta === 0) {
      textRs = `Phương trình vơi hệ số nhập vào vô số nghiêm: ${a}x^2 + ${b}x + ${c} = 0`;
      setTextRs(textRs);
      result = (-b / 2) * a;
      setResult(result);
    } else {
      if (deta < 0) {
        textRs = `Phương trình vơi hệ số nhập vào vô nghiêm: ${a}x^2 + ${b}x + ${c} = 0`;
        setTextRs(textRs);
      } else {
        textRs = `Phương trình vơi hệ số nhập vào có hai nghiệm phân biệt: ${a}x^2 + ${b}x + ${c} = 0`;
        setTextRs(textRs);
      }
    }
  };
  return (
    <QuantityContext.Provider
      value={{
        number1,
        setNumber1,
        number2,
        setNumber2,
        number3,
        setNumber3,
        textRs,
        result,
        handleCalculate,
      }}
    >
      {children}
    </QuantityContext.Provider>
  );
};

export default ContextProvider;
