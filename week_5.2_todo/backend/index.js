import express from "express";
import { createTodo, updateTodo } from "./types";
import { todo } from "./db.js";

const app = express();
const port = 400;

app.use(express.json());

app.post("todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "You send wrong message" });
    return;
  }
  //put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "You send the wrong inputs" });
  }
  return;
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
