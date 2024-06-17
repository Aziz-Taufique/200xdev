////////////////////////////////////////////// PROMISES AND ASYNC AWAIT ////////////////////////////////////////////////

// =>  promise is nothing but class => new Promise(function(resolve){})

function findSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill() {
  console.log(findSum(100));
}

// setTimeout(findSumTill, 1000);

// console.log("aziz bhai");

////////////////////////

///// code with without promises
const fs = require("fs");

// my own async fn
function azizReadFile(cb) {
  fs.readFile("text.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

// calback fn to call
function onDone(data) {
  console.log(data);
}

// azizReadFile(onDone);

//it is just a wrapper on the top of another async fn
// usually all async fn you will write will be on top of js provided async fn like setTimeOut or fs.readFile

////////  code with promises
function jonReadFile() {
  //   console.log("inside jonReadFile");
  return new Promise(function (resolve) {
    // console.log("inside promise");
    fs.readFile("text.txt", "utf-8", function (err, data) {
      //   console.log("before resolve");
      resolve(data);
    });
  });
}

function Done(data) {
  console.log(data);
}

const a = jonReadFile();
// console.log(a);
// a.then();

/////////////////////////////////////////////////
// promise is nothing but class
// => pending, resolve, rejected

const b = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("hehe......");
  }, 5000);
});

function callbac() {
  console.log(b);
}
// console.log(b);
// b.then(callbac);

//////////////////////////ASYNC AWAIT ///////////////

function jessyAsyncFn() {
  return new Promise(function (resolve) {
    // do some async logic here
    setTimeout(() => {
      resolve("hii baby");
    }, 2000);
  });
}

async function main() {
  // no cb, no .then syntex
  const value = await jessyAsyncFn();
  console.log("hi heheh");
  console.log(value);
}

main();
