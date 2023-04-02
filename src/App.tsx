import { useCallback, useMemo, useState } from "react";
import { List } from "./List";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // every time when dark is updated, App will be re-rendered
  // getDouble will be re-created
  // in order to avoid re-creating by getDouble
  // getDouble should only depends on the count state
  // BEFORE:
  // const getDouble = () => {
  //   return doubleNum(count);
  // };
  // AFTER:
  const getDouble = useMemo(() => {
    return doubleNum(count);
  }, [count]);
  // useMemo can cause memory usage / overhead

  // useMemo: Returns and stores the calculated value of a function in a variable
  // useCallBack: Returns and stores the actual function itself in a variable

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div>double: {getDouble}</div>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
}

export default App;

const doubleNum = (num: number): number => {
  console.log("calling doubleNum");
  return num * 2;
};
