function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  //   while (n > 1) {
  //     if (n % 2 !== 0) {
  //       return false;
  //     }
  //     n = n / 2;
  //   }
  //   return true;
  return (n & (n - 1)) === 0; // bitwise solution
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(7));

// Big-O = O(logn)
// Big-O = O(1) -> bitwise solution
