function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  const sum = fib.reduce((prevValue, currValue) => prevValue + currValue, 0);
  console.log(`Sequence for n = ${n}: `, fib);
  console.log(`Sum for n = ${n}: `, sum);
}

fibonacci(2);
fibonacci(3);
fibonacci(7);

// Big-O = O(n)
