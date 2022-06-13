function factorial(n) {
  let result = 1;
  const fact = [1];
  //   while (n > 0) result *= n--;
  for (let i = 1; i <= n; i++) {
    result *= i;
    fact[i] = result;
  }
  console.log(`Sequence for n = ${n}: `, fact);
  console.log(`Factorial for n = ${n}: `, result);
}

factorial(0);
factorial(1);
factorial(5);

// Big-O = O(n)
