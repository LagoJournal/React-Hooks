import { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const [text, setText] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevText = useRef();

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>UseRef</h2>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        Your text: {text}, which used to be: {prevText.current}
      </div>
      <button onClick={focus}>Focus that input!</button>
    </div>
  );
};
