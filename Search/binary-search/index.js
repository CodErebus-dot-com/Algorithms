function binarySearch(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target === arr[mid]) return mid;
    if (target < arr[mid]) high = mid - 1;
    else if (target > arr[mid]) low = mid + 1;
  }
  return -1;
}

console.log(
  "Sorted array: ",
  [-5, 2, 10, 4, 6].sort((a, b) => a - b)
);
console.log(binarySearch([-5, 2, 10, 4, 6], 10));
console.log(binarySearch([-5, 2, 10, 4, 6], 6));
console.log(binarySearch([-5, 2, 10, 4, 6], 20));

// Big-O = O(logn)
