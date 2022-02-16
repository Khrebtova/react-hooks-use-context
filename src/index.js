import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { UserProvider } from "./context/User";
import { ThemeProvider } from "./context/Theme";
import "./index.css";

ReactDOM.render(
    <ThemeProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </ThemeProvider>
, 
document.getElementById("root"));
