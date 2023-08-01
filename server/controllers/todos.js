import Todo from "../models/Todo.js";
import User from "../models/User.js";

export const getAllTodos = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    console.log(user);
    // const todos = await User.find().sort({ updatedAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

// export const createTodo = async (req, res) => {};
