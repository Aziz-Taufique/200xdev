import express from "express";
import bodyParser from "body-parser";

//// => you can only sent quary parameter in get request not in post req
//// => In post request you send body

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

function calculateSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

function sum(a, b) {
  return a * b;
}

app.get("/calSum", function (req, res) {
  const n = req.query.n;
  const ans = calculateSum(n);

  // Alwaya send in string
  res.send(ans.toString());
});

app.get("/sum", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const ans = sum(a, b);

  res.send("hey there your ans is " + ans.toString());
});

const users = [
  {
    name: "miya",
    kidneys: [
      {
        health: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const miyaKidney = users[0].kidneys;
  const noOfKidneys = miyaKidney.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < miyaKidney.length; i++) {
    if (miyaKidney[i].health) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const unHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    unHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ health: isHealthy });
  res.json({ msg: "HO gaya" });
  console.log(users);
});

app.put("/", (req, res) => {
  const userKidney = users[0].kidneys;
  const numberOfKidneyus = userKidney.length;

  for (let i = 0; i < userKidney.length; i++) {
    userKidney[i].health = true;
  }
  res.json({ msg: "All done" });
});

//// removing all the unhealthy kidney
app.delete("/", (req, res) => {
  const newKidney = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].health) {
      newKidney.push({
        health: true,
      });
    }
  }
  users[0].kidneys = newKidney;
  res.json({ msg: "Deleted successfully" });
});

import fs from "fs";

app.get("/files/:fileName", (req, res) => {
  const name = req.params.fileName;
  console.log(name);
  fs.readFile(name, "utf-8", (err, data) => {
    res.json({ data });
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
