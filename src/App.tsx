import { useCallback, useState } from "react";
import { List } from "./List";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // every time when dark is updated, App will be re-rendered
  // getItems will be re-created
  // in order to avoid re-creating by getItems
  // getItems should only depends on the count state
  // BEFORE:
  // const getItems = () => {
  //   return [count, count + 1];
  // };
  // AFTER:
  const getItems = useCallback(() => {
    return [count, count + 1];
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <List getItems={getItems} />
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
}

export default App;
