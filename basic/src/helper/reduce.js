// const list = [
//   { specific: "A", specificProperty: 1 },
//   { specific: "A", specificProperty: 2 },
//   { specific: "B", specificProperty: 3 },
// ];

function reduce({ list }) {


  // Empty List
  const initialValue = [];
  const totalList = list.reduce((accumulator, currentValue) => {
    if (
      !accumulator
        .map((eachItem) => eachItem.specific)
        .includes(currentValue.specific)
    ) {
      return [...accumulator, { define: currentValue.specificProperty }];
    } else return accumulator;
  }, initialValue);

  return { totalList };
}

export default reduce;
