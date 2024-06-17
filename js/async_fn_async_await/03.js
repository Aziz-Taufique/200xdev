////promises

//      CALLBACK HELL
//////////////////////    =>   Wraping another fn
// => this aproach uses a callback you have created a fn where other people can send a callback , this is good , but could lead to callback hell

// console.log("hii there from 1st line");

function myOwnSetTimeOUt(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeOUt(() => {
  //   console.log("hello baby");
}, 3000);

function promisifiedMyOwnSetTimeout(duration) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
}

const ans = promisifiedMyOwnSetTimeout(1000);
// console.log(ans);
ans.then(function () {
  //   console.log("oye hoye");
});
// console.log(ans);

////

function fn(resolve) {
  resolve("hillo");
}

const out = new Promise(fn);

function print() {
  console.log("MOnika o my darling");
}

for (let i = 0; i <= 5; i++) {
  setTimeout(print, 2000 * i);
}
