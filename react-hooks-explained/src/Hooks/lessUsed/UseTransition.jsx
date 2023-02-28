import { useState, useTransition } from "react";

export const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const reallyLargeListSize = 20000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const ls = [];
      for (let i = 0; i <= reallyLargeListSize; i++) {
        ls.push(e.target.value);
      }
      setList(ls);
    });
  };

  return (
    <div>
      <h2>UseTransition</h2>
      <input value={input} type="text" onChange={handleChange} />
      <button onClick={() => setList([])}>Clear that mess</button>
      {isPending
        ? "Wait a minute, im working on it"
        : list.map((e) => <div key={e}>{e}</div>)}
    </div>
  );
};
