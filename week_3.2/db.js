import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
mongoose.connect("asfsdljfdasldfas");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

// const user = new User.create({name: "robert", email: "robert@gmail.com", password: '12345'})

// user.save()

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({
    $or: [{ name }, { email }],
  });

  if (existingUser) {
    return res
      .status(400)
      .json({ msg: "User already exist with this uername or email" });
  }

  //   const user = await User.create()

  const user = await new User.create({
    name: name,
    password: password,
    email: email,
  });

  user.save();

  return res.status(200).json({ msg: "User created successfully" });
});
