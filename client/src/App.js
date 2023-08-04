import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreeen from "./screens/MainScreeen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";

function App() {
  const [theme, setTheme] = useState("light");

  const setCurrTheme = () => {
    const currTheme = localStorage.getItem("theme");
    if (!currTheme) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      setTheme(currTheme);
    }
  };

  const ToggleTheme = () => {
    if (theme == "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    setCurrTheme();
  }, [theme]);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: theme }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={<MainScreeen theme={theme} SetTheme={ToggleTheme} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
