const removeDuplicates = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  let filteredArray = [];
  filteredArray.push(arr[0]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      filteredArray.push(arr[i + 1]);
    }
  }

  return filteredArray;
};
const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result);
