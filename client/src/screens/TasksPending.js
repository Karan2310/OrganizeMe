import React from "react";
import TodoCard from "../components/TodoCard";
import { Grid } from "@mantine/core";

const TasksPending = ({ Todos, setChange, change }) => {
  const incompleteTodos = Todos && Todos.filter((todo) => !todo.is_completed);

  if (incompleteTodos && incompleteTodos.length == 0) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "#808080",
        }}
      >
        <h1>All tasks completed :)</h1>
      </div>
    );
  }

  return (
    <div>
      <Grid gutter="xl">
        {incompleteTodos &&
          incompleteTodos
            .sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
            .map((todo) => {
              const { title, priority, due_date, is_completed, _id } = todo;
              const oneDay = 24 * 60 * 60 * 1000;
              const currentDate = new Date();
              const dueDateObject = new Date(due_date); // Parse or convert due_date to Date object
              const daysLeft = Math.round(
                (dueDateObject - currentDate) / oneDay
              );
              return (
                <TodoCard
                  setChange={setChange}
                  change={change}
                  key={_id}
                  id={_id}
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
