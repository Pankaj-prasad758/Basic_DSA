// fibonacci number

const fibo = (num) => {
  const arr = [0, 1];

  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[num];
};

// console.log(fibo(5));

// fibonacci number using recursion

const fib = (num) => {
  if (num <= 1) return num;

  return fib(num - 1) + fib(num - 2);
};
//num = 6 => 5 + 4 => 9
//num = 5 => 4 + 3 => 7
//num = 4 => 3 + 3 = 5
//num = 3 => 2 + 1 = 3
//num = 2 => 1 + 0 = 1
// fib(0) = 0

// fib(1) = 1

// fib(2) = fib(1) + fib(0) = 1 + 0 = 1

// fib(3) = fib(2) + fib(1) = 1 + 1 = 2

// fib(4) = fib(3) + fib(2) = 2 + 1 = 3

// fib(5) = fib(4) + fib(3) = 3 + 2 = 5

// fib(6) = fib(5) + fib(4) = 5 + 3 = 8

console.log(fib(6));
