import express from "express";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  markTodoComplete,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/:userId", getAllTodos);
router.post("/:userId", createTodo);
router.delete("/:userId/:todoId", deleteTodo);
router.patch("/:userId/:todoId", markTodoComplete);

export default router;
