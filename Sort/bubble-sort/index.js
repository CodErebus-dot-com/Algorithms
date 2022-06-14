function bubbleSort(arr) {
  let flag;
  do {
    flag = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        flag = true;
      }
    }
  } while (flag);

  return arr;
}

function bubbleDescSort(arr) {
  let flag;
  do {
    flag = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        flag = true;
      }
    }
  } while (flag);

  return arr;
}

console.log("Ascending: ", bubbleSort([-6, 20, 8, -2, 4]));
console.log("Descending: ", bubbleDescSort([-6, 20, 8, -2, 4]));

// Big-O = O(n^2)
