// loop

let a = 0;
for (let i = 0; i <= 5; i++) {
  a = a + i;
}

// console.log(a);

// function

function findSum(n) {
  let a = 0;
  for (let i = 0; i <= n; i++) {
    a = a + i;
  }
  return a;
}

const sum = findSum(5);
// console.log(sum);

// CALLBACK FUNCTION

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquare(a, b) {
  const val1 = square(a);
  const val2 = square(b);
  return val1 + val2;
}

function sumOfCube(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);
  return val1 + val2;
}

function sumOfSomethig(a, b, fn) {
  console.log(a);
  console.log(fn);
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

// const ans = sumOfSomethig(2, 2, cube);
// console.log(ans);

// console.log(sumOfCube(2, 2));

/******************Anonymous function************************************************************/

// Anonymous function => A function who does not have name

const ans = sumOfSomethig(2, 2, function (a) {
  return a * a * a;
});

console.log(ans);
