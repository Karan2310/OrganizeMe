import Todo from "../models/Todo.js";
import User from "../models/User.js";

export const getAllTodos = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    // const todos = await User.find().sort({ updatedAt: -1 });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTodo = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const { title, priority, due_date } = req.body;
    const newTodo = new Todo({
      title,
      priority,
      due_date,
    });
    user.todos.push(newTodo);
    await user.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const todoId = req.params.todoId;
    const todoIndex = user.todos.findIndex(
      (todo) => todo._id.toString() === todoId
    );

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found." });
    }

    user.todos.splice(todoIndex, 1);
    await user.save();

    res.status(200).json({ message: "Todo deleted successfully." });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const markTodoComplete = async (req, res) => {
  // try {
  //   const userId = req.params.userId;
  //   const user = await User.findById(userId);
  //   if (!user) {
  //     return res.status(404).json({ message: "User not found." });
  //   }
  //   const todoId = req.params.todoId;
  //   const todoIndex = user.todos.findIndex(
  //     (todo) => todo._id.toString() === todoId
  //   );
  //   if (todoIndex === -1) {
  //     return res.status(404).json({ message: "Todo not found." });
  //   }
  //   user.todos[todoIndex].is_completed = true;
  //   await user.save();
  //   res.status(200).json(user.todos[todoIndex]); // Return the updated todo
  // } catch (error) {
  //   res.status(500).json(error);
  // }
};
