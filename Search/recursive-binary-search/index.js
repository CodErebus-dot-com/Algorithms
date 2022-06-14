function recursiveBinarySearch(arr, target) {
  arr = arr.sort((a, b) => a - b);
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, low, high) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);
  if (target === arr[mid]) return mid;
  if (target < mid) return search(arr, target, low, mid - 1);
  else return search(arr, target, mid + 1, high);
}

console.log(recursiveBinarySearch([-5, 2, 10, 4, 6], 10));
console.log(recursiveBinarySearch([-5, 2, 10, 4, 6], 6));
console.log(recursiveBinarySearch([-5, 2, 10, 4, 6], 20));

// Big-O = O(logn)
