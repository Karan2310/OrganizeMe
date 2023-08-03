import React from "react";
import TodoCard from "../components/TodoCard";
import { Grid } from "@mantine/core";

const TasksCompleted = ({ Todos }) => {
  return (
    <div>
      <Grid gutter="xl">
        {Todos &&
          Todos.sort((b, a) => new Date(a.due_date) - new Date(b.due_date)).map(
            (todo, index) => {
              const { title, priority, due_date, is_completed } = todo;
              const oneDay = 24 * 60 * 60 * 1000;
              const currentDate = new Date();
              const daysLeft = Math.round((due_date - currentDate) / oneDay);
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
            }
          )}
      </Grid>
    </div>
  );
};

export default TasksCompleted;
