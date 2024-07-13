const isPalindrome = (str) => {
  const reverse=str.toLowerCase().split('').reverse().join('');
  return str===reverse
  };
  const result = isPalindrome("racecar");
  console.log(result);
  isPalindrome