import { Children, createContext, useState } from "react";

const StoreContext = createContext({
  data: [],
  addData: () => {},
  reduceData: () => {},
  deleteData: () => {},
});

function StoreCartProviderHelper(children) {
  const [selectedData, setSelectedDate] = useState([]);
  const valueItem = {
    data: selectedData,
    addData: handleAdd,
    removeData: handleReduce,
    deleteData: handleDelete,
    setSelectedDate,
  };
  const handleAdd = (itm) => {
    setSelectedDate((previousSelected) => {
      const exisiting = previousSelected.find((i) => i.id == itm.id);
      if (exisiting) {
        previousSelected.map((itmsPreviouslyFd) => {
          itmsPreviouslyFd.id == itm.id
            ? { ...itmsPreviouslyFd, quantity: itmsPreviouslyFd.quantity + 1 }
            : itmsPreviouslyFd;
        });
      }
      return [...previousSelected, { ...itm, quantity: 1 }];
    });
  };
  const handleReduce = (id) => {
    setSelectedDate((previousSelected) => {
      previousSelected.map((itmsPreviouslyFd) => {
        itmsPreviouslyFd.id == id
          ? { ...itmsPreviouslyFd, quantity: itmsPreviouslyFd.quantity - 1 }
          : itmsPreviouslyFd;
      });
    });
  };
  const handleDelete = (id) => {
    selectedData((previousSelected) => {
      previousSelected.filter((itm) => itm.id !== id);
    });
  };

  return (
    <StoreContext.Provider value={valueItem}>{children}</StoreContext.Provider>
  );
}

export default StoreCartProviderHelper;
