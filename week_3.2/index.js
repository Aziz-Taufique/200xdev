import express from "express";
import jwt from "jsonwebtoken";

const port = 3001;
const jwtPassword = "12345";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hpfpfp");
});

const ALL_USERS = [
  {
    username: "aziz@gmail.com",
    password: "123",
    name: "aziz",
  },
  {
    username: "kali@gmail.com",
    password: "12345",
    name: "kali",
  },
  {
    username: "riya@gmail.com",
    password: "1234567",
    name: "riya",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists in ALL_USERS array
  let userExists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User dosnt exists in our memory db",
    });
  }

  const token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(token, jwtPassword);
    const username = decode.username;
    console.log(username);
    // return a list of user other then this username
    res.json({
      users: ALL_USERS.filter((value) => {
        if (value.username === username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (error) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(port, () => {
  console.log(`server is listen on port ${port}`);
});
