function recursiveFibs(n, recursiveNums = [0, 1]) {
  if (n === 2) return recursiveNums;
  if (n <= 1) return [0];
  const numA = recursiveNums[recursiveNums.length - 1];
  const numB = recursiveNums[recursiveNums.length - 2];
  recursiveNums.push(numA + numB);
  return recursiveFibs(n - 1, recursiveNums);
}

console.log(recursiveFibs(-1)); // returns [0]
console.log(recursiveFibs(2)); // returns [0, 1]
console.log(recursiveFibs(3)); // returns [0, 1, 1]
console.log(recursiveFibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
