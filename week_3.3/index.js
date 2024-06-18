import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hehehe");
});

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({ msg1: "not eligible" });
  }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", (req, res) => {
  res.json({ msg1: "you have successfully rode the first ride" });
});

app.get("/ride2", (req, res) => {
  res.json({ msg1: "hohho oh yas" });
});

app.listen(port, () => {
  console.log(`Server is listen on port ${port}`);
});
