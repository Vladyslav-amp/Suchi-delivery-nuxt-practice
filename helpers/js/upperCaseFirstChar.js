// Function to capitalize the first char of a string
const upperCaseFirstChar = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};

export default upperCaseFirstChar;
