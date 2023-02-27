import { useState } from "react";

export const UseState = () => {
  // const [number, setNumber] = useState(0);
  const [number, setNumber] = useState(() => 0);

  const minus = () => {
    number > 0 && setNumber(number - 1);
  };

  const plus = () => {
    number < 99 && setNumber(number + 1);
  };

  return (
    <div>
      <h1>UseState</h1>
      <button onClick={minus}>-</button>
      <span>{number}</span>
      <button onClick={plus}>+</button>
    </div>
  );
};
