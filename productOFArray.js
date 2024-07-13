const productOfArray = (arr) => {
  const total = arr.reduce((pd, item) => pd * item, 1);

  return total;
};

const result = productOfArray([1,2,3,4]);
console.log(result);
