import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("hehehe");
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const value = a + b;
  console.log(value.toString());
  res.send(value.toString());
});

app.listen(4000, () => {
  console.log("server is running");
});
