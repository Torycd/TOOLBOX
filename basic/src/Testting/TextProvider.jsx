import { createContext, useContext, useState } from "react";

const DATA = [
  { id: 1, name: "Hammer", quantity: 1 },
  { id: 2, name: "Screwdriver", quantity: 1 },
  { id: 3, name: "Wrench", quantity: 1 },
];

const TextContext = createContext({
  data: [],
  addData: () => {},
  reduceData: () => {},
  removeData: () => {},
});

function TextProvider({ children }) {
  const [tools, setTools] = useState(DATA);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const valueItem = {
    data: tools,
    addData: handleAdd,
    removeData: handleDelete,
    reduceData: handleReduce,
  };

  // 👉 YOU implement these
  function handleAdd(item) {
    setTools((previousItem) => {
      // check if its exisitng first
      const existing = previousItem.find((i) => i.id == item.id);
      if (existing) {
        previousItem.map((itm) => {
          itm.id == item.id ? { ...itm, quantity: itm.quantity + 1 } : itm;
        });
      }
      return [...previousItem, { ...itm }];
    });
  }
  function handleReduce(id) {
    setTools((previousItem) => {
      previousItem.map((itm) => {
        itm.id == id ? { ...itm, quantity: itm.quantity - 1 } : itm;
      });
    });
  }

  function handleDelete(id) {
    setTools((previousItem) => {
      previousItem.filter((itm) => itm.id !== id);
    });
  }

  return (
    <TextContext.Provider
      value={{ tools, handleAdd, handleReduce, handleDelete }}
    >
      {children}
    </TextContext.Provider>
  );
}

function useText() {
  const context = useContext(TextContext);
  if (!context) throw new Error("useText musr be used in TextProvider");
  return context;
}

export { TextProvider, useText };
