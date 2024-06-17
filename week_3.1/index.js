import express, { query } from "express";
import { z } from "zod";

const app = express();
const port = 4000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("fooo");
});

///////////////// Worst way of doing input validation

app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "aziz" || password != "pass") {
    res.status(403).json({ msg: "User do not exist" });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({ msg: "Wrong inputs" });
    return;
  }

  // do someting with the kidney here
  res.status(200).json({ msg: "your kidney is fine" });
});

///////////////////////////////////////  middlewares

let numberOfRequest = 0;

function calculateRequest(req, res, next) {
  numberOfRequest++;
  console.log(numberOfRequest);
  next();
}

/// set calculateRequest middleware at every route
/// after this no neet to declear calculateRequest middleware at every route
// app.use(calculateRequest);

app.get("/checkup-health", (req, res) => {
  console.log(req.body);
  res.send(`count is : ${numberOfRequest.toString()}`);
});

app.post("/checkup", (req, res) => {
  const kidney = req.body.kidney;
  console.log(kidney);

  //   if (!kidney) {
  //     res.json({ msg: "wrong inputs" });
  //     return;
  //   }

  //   if (kidney.length === 0) {
  //     res.json({ msg: "please provid some input" });
  //     return;
  //   }

  const kidneyLength = kidney.length;
  console.log(kidneyLength);

  res.send("you have " + kidneyLength + " kidney");
});

// global catch
app.use((err, req, res, next) => {
  // errorCount++
  res.json({ msg: "Something wents wrong" });
});

/////////////////       ZON

// const schema = z.array(z.number());
// {
//     email: string,
//     password: atlesat 8 letter,
//     country: "In", "US"
// }

const schema = z.object({
  email: z.string(),
  password: z.string(),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number()),
});

app.post("/zod-testing", (req, res) => {
  const kidney = req.body.kidney;

  const response = schema.safeParse(kidney);
  if (!response.success) {
    res.status(411).json({ msg: "Invalid input" });
  } else {
    res.send({ response });
  }

  //   res.send({ response });
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
