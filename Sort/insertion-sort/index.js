function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];
    let j = i - 1;
    // with for loop
    // for (; j >= 0 && arr[j] > numToInsert; j--) {
    //   arr[j + 1] = arr[j];
    // }
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numToInsert;
  }
  return arr;
}

console.log(insertionSort([-6, 20, 8, -2, 4]));

// Big-O = O(n^2)
