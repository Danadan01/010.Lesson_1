function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert(sumTo(100));
console.log(sumTo(100));

function sumTo1(n) {
  if (n === 1) {
    return 1;
  } else {
   return n + sumTo1(n - 1);
  }
}

alert(sumTo1(100));
console.log(sumTo1(100));