function recursiveFactorial(n) {
  if (n === 0) return 1;
  return recursiveFactorial(n - 1) * n;
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(6));

// Big-O = O(n)
