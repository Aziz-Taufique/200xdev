const name = ["aziz", "ali", "boo", "baby", "aaoo"].filter((e) => {
  if (e.startsWith("b")) {
    return true;
  } else {
    return false;
  }
});
console.log(name);
