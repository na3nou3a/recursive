function fibs(n) {
  const fibNumbers = [0, 1];
  if (n <= 1) return [0];
  if (n === 2) return fibNumbers;
  for (let i = 2; i < n; i++) {
    fibNumbers.push(
      fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2]
    );
  }
  return fibNumbers;
}

console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(3)); // returns [0, 1, 1]
console.log(fibs(4)); // returns [0, 1, 1, 2]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
