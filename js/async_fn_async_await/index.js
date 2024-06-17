function findSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

function findSumTime() {
  console.log(findSum(500));
}

/// busy waiting
function busySleep() {
  let a = 0;
  for (let i = 0; i <= 1000000000; i++) {
    a += i;
  }
}

const { isUtf8 } = require("buffer");
const { log } = require("console");
// busySleep();

// setTimeout(findSumTime, 1000);

// console.log("Aziz");

// Example of asyn fn =>
// setTimeout
//  fs.readFile => to read a file
//  fetch => to fetch some data from other

const fs = require("fs");
const { isContext } = require("vm");

// this will run once after console cuz fs.readFile is async fn
fs.readFile("text.txt", "utf-8", function (err, data) {
  // console.log(data);
});

// this will run first
// console.log("hii");

// This will take longer time then fs.read but still run first, ance until this code not complete fs.readFile waiting  will be complete or not, once this code will complete then rs.readFile execute

let a = 0;
for (let i = 0; i <= 1000000; i++) {
  a += i;
}

// console.log(a);
// console.log("hi there 2");

// callback only make sence in async fn

/////////////////////////////////////////////// PROMISES AND ASYNC AWAIT ////////////////////////////////////////////////

function findSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    a += i;
  }
  return ans;
}

function findSumTill() {
  findSum(100);
}

// setTimeout(findSumTill(), 1000);

// console.log("aziz bhai");

const x = 1;
console.log(x);

function copyFille(cb) {
  fs.readFile("text.txt", "utf-8", function (err, data) {
    data = data + "oye hoye";
    fs.writeFile("text.txt", function () {
      cd();
    });
  });
}

copyFille(function () {
  console.log("Copyright has been puted");
});

let ans = 0;
for (let i = 0; i <= 100; i++) {
  ans += 1;
}

// console.log(ans);
