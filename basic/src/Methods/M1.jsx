const fruits = ["apple", "banana", "avocado", "lemon", "watermelon"];
const numArray = [1, 2, 3, 4, 5, 6, 7, 8];

function M1() {
  // for foreach you will return ech item in the array
  const Arraylearn = () => {
    const a1 = numArray.forEach((eachItem) => console.log(eachItem));
  };

  Arraylearn();
  // in Map you must return a new function
  const mapLearn = () => {
    const newArray = fruits.map((item) => "nameOfFruit");
    console.log(newArray);
    const duplicateArray = fruits.map((item) => item + item);
    console.log(duplicateArray);
  };
  mapLearn();
  // The filter Method must always return a condition
  const filterLearn = () => {
    const newArray = numArray.filter((nm) => nm !== 7);
    console.log(newArray);
  };
  filterLearn();

  // The find Method must alwasy return a condition and when the codition is true it returns the right element
  const findLearn = () => {
    const newArray = fruits.find((item) => item == "banana");
    console.log(newArray);
  };

  findLearn();

  return <div></div>;
}

export default M1;
