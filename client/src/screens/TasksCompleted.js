import React from "react";
import TodoCard from "../components/TodoCard";
import { Grid } from "@mantine/core";

const TasksCompleted = () => {
  const todo = [
    {
      title: "Sample Todo",
      priority: "high",
      due_date: new Date("2023-01-10"),
      is_completed: true,
    },
    {
      title: "wjdbfiu yrgfiwyegdf icgeoiudhcdfocndfoicjneoidjnfbb gif",
      priority: "medium",
      due_date: new Date("2023-04-02"),
      is_completed: true,
    },
    {
      title: "Sample Todo",
      priority: "low",
      due_date: new Date("2023-05-10"),
      is_completed: true,
    },
    {
      title: "Sample Todo",
      priority: "High",
      due_date: new Date("2023-08-01"),
      is_completed: true,
    },
  ];
  return (
    <div>
      <Grid gutter="xl">
        {todo &&
          todo
            .sort((b, a) => new Date(a.due_date) - new Date(b.due_date))
            .map((todo, index) => {
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
            })}
      </Grid>
    </div>
  );
};

export default TasksCompleted;
