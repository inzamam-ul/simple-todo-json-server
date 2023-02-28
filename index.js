import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Todo from "./models/todo.js";

const app = express();
colors.enable();
dotenv.config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const uri = process.env.MONGOOSE_CONNECTION_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!".bold.white.bgGreen))
  .catch((err) => console.log(err));

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const docs = new Todo(req.body);
    const data = await docs.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.patch("/todos/:id", async (req, res) => {
  try {
    const data = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const data = await Todo.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "hi I'm alive now",
  });
});

app.listen(port, () =>
  console.log(
    `Server in running on port:${colors.bold.bgYellow(port)} \n`.bold.bgMagenta
  )
);
