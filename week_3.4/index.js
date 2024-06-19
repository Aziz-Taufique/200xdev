import express from "express";
import jwt from "jsonwebtoken";

const app = express();

const women = {
  name: "divya",
  accountNumber: 123456,
};

const value = jwt.sign(women, "secret");
console.log(value);

const verifyToken = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGl2eWEiLCJhY2NvdW50TnVtYmVyIjoxMjM0NTYsImlhdCI6MTcxODc0NDg5MX0.a3-pVoAEynKfZGhD0gLCwdCNTti3C8Auj8Vkc43ggIQ",
  "secret"
);
console.log(verifyToken);

app.listen(4000, () => {
  console.log("Server is running");
});
