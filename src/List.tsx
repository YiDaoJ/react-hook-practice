import React, { FC, useEffect, useState } from "react";

interface ListInterface {
  getItems(): string[];
}

export const List: FC<ListInterface> = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("update Items");
  }, [getItems]);

  // console.log("test List");

  return items.map((item) => <div key={item}>{item}</div>);
};
