import { createContext, useContext } from "react";

const nameContext = createContext({
  item: [],
  func: () => {},
});
function nameProvider() {
  const item = [];
  function func() {}
  return <nameContext.Provider value={{ item, func }}></nameContext.Provider>;
}

function usePosts() {
  const context = useContext(nameContext);
  return context;
}
export { nameProvider, usePosts };
