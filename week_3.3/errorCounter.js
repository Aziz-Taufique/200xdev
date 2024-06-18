import express from "express";

const app = express();

let errorCount = 0;

app.use((req, res, next) => {
  errorCount = errorCount + 1;
  next();
});

app.get("/user", (req, res) => {
  //   let a; // usdefined
  //   a.length; // js throw an error
  throw new Error("User not found");
  res.status(200).json({ name: "tuco" });
});

app.post("/user", (req, res) => {
  res.status(200).json({ name: "jessy" });
});

app.get("/errorCount", (req, res) => {
  res.status(200).json({ errorCount });
});

/// Error handling middleware

app.use((err, req, res, next) => {
  res.status(404).json({});
  errorCount = errorCount + 1;
});

app.listen(4001);
