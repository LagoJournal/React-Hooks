import { useCallback, useEffect, useState } from "react";

export const UseCallback = () => {
  const [dark, toggleDark] = useState(false);
  const [number, setNumber] = useState(1);
  const [items, setItems] = useState([]);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  useEffect(() => {
    setItems(getItems());
  }, [getItems]);

  return (
    <div style={theme}>
      <h2>UseCallback</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => toggleDark(!dark)}>Toggle!</button>
      <ul>
        {items.map((e) => (
          <p key={e}>{e}</p>
        ))}
      </ul>
    </div>
  );
};
