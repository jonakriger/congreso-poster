// main.jsx

// React
import React from "react";
import ReactDOM from "react-dom/client";

// Chart Config
import "./Config/ChartConfig";

// Components
import App from "./App";

// Styles
import "./Styles/main.scss";

// Returns
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
