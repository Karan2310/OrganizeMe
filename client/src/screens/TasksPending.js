import React from "react";
import TodoCard from "../components/TodoCard";
import { Grid } from "@mantine/core";

const TasksPending = () => {
  const todo = [
    {
      title: "Sample Todo",
      priority: "High",
      due_date: new Date("2023-08-10"),
      is_completed: false,
    },
    {
      title: "Sample Todo",
      priority: "High",
      due_date: new Date("2023-08-10"),
      is_completed: false,
    },
    {
      title: "Sample Todo",
      priority: "High",
      due_date: new Date("2023-08-10"),
      is_completed: false,
    },
    {
      title: "wjdbfiu yrgfiwyegdf icgeoiudhcdfocndfoicjneoidjnfbb gif",
      priority: "High",
      due_date: new Date("2023-08-10"),
      is_completed: false,
    },
    {
      title: "Sample Todo",
      priority: "High",
      due_date: new Date("2023-08-10"),
      is_completed: false,
    },
    {
      title: "Sample Todo",
      priority: "High",
      due_date: new Date("2023-08-10"),
      is_completed: false,
    },
  ];
  return (
    <div>
      <Grid align="stretch">
        {todo &&
          todo.map((todo, index) => {
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

export default TasksPending;
