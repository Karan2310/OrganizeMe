import "./App.css";
import { Navigation } from "./components/Navigation.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksCompleted from "./screens/TasksCompleted";
import TasksPending from "./screens/TasksPending";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
