const arr = [1, 2, 3, 4, 5];

/////// normal way
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2);
}
// console.log(newArr);

//// map  => global fn

const ans = arr.map((e) => {
  return e * 3;
});
// console.log(ans);

//////////////    another way
const input = [3, 4, 5, 6, 7].map((i) => {
  return i + 1;
});
// console.log(input);

/////////////////////////////////////////////////// Filter

// give me all the even all the even value from an arr

///// normal way
const arrr = [2, 3, 4, 5, 6, 7, 8];

const newArrr = [];

for (let i = 0; i < arrr.length; i++) {
  if (arrr[i] % 2 == 0) {
    newArrr.push(arrr[i]);
  }
}
console.log(newArrr);

//// filter

const val = arrr.filter((e) => {
  if (e % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(val);

//// give all the name with starts with letter a
const name = ["aziz", "ali", "jon", "baby", "aaoo"].filter((e) => {
  if (e.startsWith("a")) {
    return true;
  } else {
    return false;
  }
});
console.log(name);
