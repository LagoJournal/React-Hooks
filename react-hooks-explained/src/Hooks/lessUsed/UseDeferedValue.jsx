import { useDeferredValue, useMemo, useState } from "react";

export const UseDeferedValue = () => {
  const [input, setInput] = useState("");
  const deferedInput = useDeferredValue(input);
  const reallyLargeListSize = 20000;
  const list = useMemo(() => {
    const ls = [];
    if (deferedInput === "") return [];
    for (let i = 0; i <= reallyLargeListSize; i++) {
      ls.push(<div key={i}>{deferedInput}</div>);
    }
    return ls;
  }, [deferedInput]);

  return (
    <div>
      <h2>UseDeferedValue</h2>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setInput("")}>Clear that mess</button>
      {list}
    </div>
  );
};
