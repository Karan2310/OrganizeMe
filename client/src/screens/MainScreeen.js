import React from "react";
import { Routes, Route } from "react-router-dom";
import TasksCompleted from "./TasksCompleted";
import TasksPending from "./TasksPending";
import AddTodo from "../components/AddTodo";
import { Navigation } from "../components/Navigation";

const MainScreeen = () => {
  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Navigation />
        <div
          className=""
          style={{
            padding: "1rem",
            height: "100%",
            overflowY: "scroll",
            width: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<TasksPending />} />
            <Route path="/completed" element={<TasksCompleted />} />
          </Routes>
        </div>
        <AddTodo />
      </div>
    </>
  );
};

export default MainScreeen;
