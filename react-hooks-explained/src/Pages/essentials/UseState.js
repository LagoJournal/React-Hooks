import { useState } from "react";

/* This hooks must be the most used in react, its composed by two elements inside an array, the first one being the value or current state,
and the second one being a function to set the value of that state. If you have multiple ones, those needs to be called in the same order always, 
meaning you cant have useState hook inside conditionals.
*/

export const UseState = () => {
  /* we initialize the number State on value 0 by two diferents ways, passing the value literally will call that action every single time we run the function, meaning that our code can have perfomance issues. If instead of that we pass the value on a function, the state will be called only on first render. */

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
