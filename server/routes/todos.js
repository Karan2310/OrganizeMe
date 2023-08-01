import express from "express";
import { getAllTodos } from "../controllers/todos";

const router = express.Router();

router.get("/:userId", getAllTodos);

export default router;
