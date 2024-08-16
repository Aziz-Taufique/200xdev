import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    completed: Boolean,
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
