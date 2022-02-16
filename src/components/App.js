import React, { useState, useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { ThemeContext } from "../context/Theme";

function App() {
  const {theme, setTheme}= useContext(ThemeContext)
  
  return (
    <main className={theme}>
      <Header  />
      <Profile />
    </main>
  );
}

export default App;
