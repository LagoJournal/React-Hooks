import {
  UseState,
  UseEffect,
  useTheme,
  useThemeUpdate,
} from "./Pages/essentials/index";

function App() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const styles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
  };

  return (
    <div style={styles}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <UseState />
      <UseEffect />
    </div>
  );
}

export default App;
