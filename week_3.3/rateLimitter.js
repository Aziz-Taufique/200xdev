import express from "express";

const app = express();

let noOfrequrestforUser = {};
setTimeout(() => {
  noOfrequrestforUser = {};
}, 1000);

app.use((req, res, next) => {
  const userId = req.headers["user-id"];
  if (noOfrequrestforUser[userId]) {
    noOfrequrestforUser[userId] = noOfrequrestforUser[userId] + 1;
    if (noOfrequrestforUser[userId] > 6) {
      res.status(404).send("not allowed");
    } else {
      next();
    }
  } else {
    noOfrequrestforUser[userId] = 1;
    next();
  }
});

app.get("/user", (req, res) => {
  res.status(200).json({ name: "tuco" });
});

app.listen(3001);
