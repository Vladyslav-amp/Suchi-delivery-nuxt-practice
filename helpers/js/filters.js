const filterArrayByKey = (array, key, value) => {
  if (!array || !Array.isArray(array)) {
    return []; // Return an empty array if the input array is invalid or not an array
  }
  return array.filter((item) => {
    // Filter the array based on the key-value pair
    if (item[key] === value) {
      return true;
    } else {
      return false;
    }
  });
};

const filterArrayByArray = (arraySource, arrayFilter) => {
  if (!arraySource || !Array.isArray(arraySource)) {
    return []; // Return an empty array if the source array is invalid or not an array
  }
  return arraySource.filter((item) => {
    let isId = false;

    // Iterate through the arrayFilter and compare id
    for (let key in arrayFilter) {
      let a = item.id;
      let b = arrayFilter[key].id;

      // Check did id match
      if (+a == +b) {
        isId = true;
        break;
      } else {
        isId = false;
      }
    }

    if (isId == true) return true;
  });
};

export default { filterArrayByKey, filterArrayByArray };
