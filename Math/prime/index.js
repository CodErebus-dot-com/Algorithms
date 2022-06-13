function isPrime(n) {
  if (n < 2) {
    // return '1 is a special number; neither Prime nor Composite';
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// Big-O = O(n) for loop upto n
// Big-O  = O(sqrt(n)) for loop upto sqrt(n)
