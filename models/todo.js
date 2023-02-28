import { ObjectId } from "bson";
import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    id: ObjectId,
    text: String,
    completed: Boolean,
    color: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
