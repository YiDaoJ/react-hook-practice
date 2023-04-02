import { useCallback, useState } from "react";
import { List } from "./List";
import { useFruitStore } from "./store";

function App() {
  const fruit = useFruitStore((state) => state.name);
  const quantity = useFruitStore((state) => state.quantity);
  const increase = useFruitStore((state) => state.increase);

  return (
    <div className="App">
      <div>
        {fruit}: Quantity is {quantity}
      </div>
      <button onClick={() => increase(10)}>Add some more</button>
    </div>
  );
}

export default App;
