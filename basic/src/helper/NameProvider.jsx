import { createContext, useContext } from "react";

const nameContext = createContext({
  item: [],
  func: () => {},
});

function NameProvider({ children }) {
  const item = [];
  function func() {}
  return (
    <nameContext.Provider value={{ item, func }}>
      {children}
    </nameContext.Provider>
  );
}

function usePosts() {
  const context = useContext(nameContext);
  if (!context) throw new Error("usePosts must be used within a NameProvider");
  return context;
}
export { NameProvider, usePosts };
