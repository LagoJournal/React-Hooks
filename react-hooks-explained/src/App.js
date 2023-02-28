import {
  UseState,
  UseEffect,
  useTheme,
  useThemeUpdate,
} from "./Pages/essentials/index";
import { UseMemo } from "./Pages/lessUsed/UseMemo";
import { UseRef } from "./Pages/lessUsed/UseRef";

function App() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const styles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
  };

  return (
    <div style={styles}>
      <h1>Essentials</h1>

      <UseState />
      <UseEffect />
      <h2>UseContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <br />
      <br />
      <h1>Less Used</h1>
      <UseRef />
      <UseMemo />
    </div>
  );
}

export default App;
