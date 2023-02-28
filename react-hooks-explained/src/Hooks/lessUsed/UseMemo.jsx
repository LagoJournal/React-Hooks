import { useEffect, useMemo, useState } from "react";

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, toggleDark] = useState(false);
  const doubleIt = useMemo(() => {
    return reallySlowFunction(number);
  }, [number]);

  const styles = useMemo(() => {
    return {
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("the color on UseMemo changed!");
  }, [styles]);

  return (
    <div>
      <h2>UseMemo</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div style={styles}>{doubleIt}</div>
      <button onClick={() => toggleDark(!dark)}>Dark?</button>
    </div>
  );
};

const reallySlowFunction = (number) => {
  for (let i = 0; i <= 999999999; i++) {}
  return number * 2;
};
