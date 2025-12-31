import { createContext, useState } from "react";

const StoreContext = createContext({
  data: [],
  addData: () => {},
  reduceData: () => {},
  deleteData: () => {},
});

function storeCartProviderHelper() {
  const [selectedData, setSelectedDate] = useState([]);
  const valueItem = {
    data: selectedData,
    addData: handleAdd,
    removeData: handleReduce,
    deleteData: handleDelete,
    setSelectedDate,
  };
  const handleAdd = (itm) => {
    
  };
  const handleReduce = () => {};
  const handleDelete = () => {};

  return <StoreContext.Provider value={valueItem}></StoreContext.Provider>;
}

export default storeCartProviderHelper;
