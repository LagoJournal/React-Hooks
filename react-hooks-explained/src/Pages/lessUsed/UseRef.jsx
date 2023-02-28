import { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const [text, setText] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

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
      <div>Your text: {text}</div>
      <div>That text rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus that input!</button>
    </div>
  );
};
