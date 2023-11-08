import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import App from "./Main";

// Get an element with ID root from index.html.
const element = document.getElementById("root");

// ReactDOM take control of root element.
const root = ReactDOM.createRoot(element);

// Render the <App/> component on the screen.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
