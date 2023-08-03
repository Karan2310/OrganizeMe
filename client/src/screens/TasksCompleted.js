import React from "react";
import TodoCard from "../components/TodoCard";
import { Grid } from "@mantine/core";

const TasksCompleted = ({ Todos }) => {
  const completedTodos = Todos.filter((todo) => todo.is_completed);
  return (
    <div>
      <Grid gutter="xl">
        {completedTodos &&
          completedTodos
            .sort((b, a) => new Date(a.due_date) - new Date(b.due_date))
            .map((todo, index) => {
              const { title, priority, due_date, is_completed } = todo;
              const oneDay = 24 * 60 * 60 * 1000;
              const currentDate = new Date();
              const dueDateObject = new Date(due_date); // Parse or convert due_date to Date object
              const daysLeft = Math.round(
                (dueDateObject - currentDate) / oneDay
              );
              return (
                <TodoCard
                  key={index}
                  title={title}
                  priority={priority}
                  due_date={due_date}
                  daysLeft={daysLeft}
                  is_completed={is_completed}
                />
              );
            })}
      </Grid>
    </div>
  );
};

export default TasksCompleted;
