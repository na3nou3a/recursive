function recursiveFibs(n) {
  const fibNums = [0, 1];
  const fibonacci = (n, recArr) => {
    if (n === 2) return recArr;
    if (n <= 1) return [0];
    const numA = recArr[recArr.length - 1];
    const numB = recArr[recArr.length - 2];
    recArr.push(numA + numB);
    return fibonacci(n - 1, recArr);
  };
  return fibonacci(n, fibNums);
}

console.log(recursiveFibs(-1)); // returns [0]
console.log(recursiveFibs(2)); // returns [0, 1]
console.log(recursiveFibs(3)); // returns [0, 1, 1]
console.log(recursiveFibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
