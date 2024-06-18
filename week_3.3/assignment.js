import express from "express";

const app = express();

let requestCount = 0;
function numberOfRequest(req, res, next) {
  requestCount = requestCount + 1;
  next();
}

app.use(numberOfRequest);

app.get("/user", (req, res) => {
  res.status(200).json({ name: "tuco" });
});

app.post("/user", (req, res) => {
  res.status(200).json({ name: "jessy" });
});

app.get("/requestCount", (req, res) => {
  res.status(200).json({ requestCount });
});

app.listen(4000, () => {
  console.log("server is running");
});
