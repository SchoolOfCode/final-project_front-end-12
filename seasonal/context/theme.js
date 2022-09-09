import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState([]);
  let longMonth;

  function getMonth() {
    const today = new Date();
    longMonth = today.toLocaleString("default", { month: "long" });
    console.log(longMonth);
  }

  useEffect(() => {
    getMonth();
    if (
      longMonth === "September" ||
      longMonth === "October" ||
      longMonth === "November"
    ) {
      setTheme("autumn");
    } else if (
      longMonth === "December" ||
      longMonth === "January" ||
      longMonth === "February"
    ) {
      setTheme("winter");
    } else if (
      longMonth === "March" ||
      longMonth === "April" ||
      longMonth === "May"
    ) {
      setTheme("spring");
    } else if (
      longMonth === "June" ||
      longMonth === "July" ||
      longMonth === "August"
    ) {
      setTheme("summer");
    }
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}
