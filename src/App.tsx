import { useCallback, useEffect, useState } from "react";
import { List } from "./List";
import { signal, effect } from "@preact/signals-react";

function App() {
  useEffect(() => {
    console.log("test");
  });
  // const [count, setCount] = useState(0);
  const count = signal(0);
  effect(() => {
    console.log("ConterWithSignals Rerendered!!");
    console.log(count.value);
  });

  return (
    <div className="App">
      <button onClick={() => count.value++}>count is {count}</button>
    </div>
  );
}

export default App;
