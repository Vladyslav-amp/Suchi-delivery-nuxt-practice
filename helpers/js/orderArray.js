// Function to order an array of objects based on a specified key and direction
const orderArray = (array, key, direction = "asc") => {
  if (direction === "asc") {
    return array.sort(
      (first, second) => +first[key] - +second[key]
    );
  } else if (direction === "desc") {
    return array.sort(
      (first, second) => +first[key] + +second[key]
    );
  }
};

export default orderArray;
