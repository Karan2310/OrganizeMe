import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TasksCompleted from "./TasksCompleted";
import TasksPending from "./TasksPending";
import AddTodo from "../components/AddTodo";
import { Navigation } from "../components/Navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { SERVER_URL } from "../config";

const MainScreeen = () => {
  const [user, setUser] = useState({});
  const [cookies, removeCookie] = useCookies(["token", "userId"]);

  const Navigate = useNavigate();

  const getUser = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
          "x-auth-token": cookies.token,
        },
      };
      const { data } = await axios.get(`${SERVER_URL}/auth/verify`, config);
      setUser(data);
      user && console.log(user.todo);
    } catch (err) {
      removeCookie("token");
      Navigate("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
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
            <Route path="/" element={<TasksPending Todos={user.todos} />} />
            <Route
              path="/completed"
              element={<TasksCompleted Todos={user.todos} />}
            />
          </Routes>
        </div>
        <AddTodo />
      </div>
    </>
  );
};

export default MainScreeen;
