import "./App.css";
import { Navigation } from "./components/Navigation.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import MainScreeen from "./screens/MainScreeen";
import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainScreeen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
