const listOfNumbers = [5, 0, 10, 5, 8, 45, 3, 7, 1, 88, 2, 65, 3, 0, 5, 2, 6];
// recurcive version
function mergeSort(arr) {
  const sorted = [];
  const sort = (array, sortedArr) => {
    const nums = [...array];
    if (nums.length === 0) return sortedArr;
    const min = Math.min(...nums);
    const index = nums.indexOf(min);
    nums.splice(index, 1);
    sortedArr.push(min);
    return sort(nums, sortedArr);
  };
  return sort(arr, sorted);
}

// for loop version

// function mergeSort(arr) {
//   const nums = [...arr];
//   const length = nums.length;
//   const sorted = [];
//   if (length <= 1) return nums;
//   for (let i = 0; i < length; i++) {
//     const min = Math.min(...nums);
//     const index = nums.indexOf(min);
//     sorted.push(min);
//     nums.splice(index, 1);
//   }
//   return sorted;
// }

console.log(mergeSort(listOfNumbers));
