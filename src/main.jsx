import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyProvider } from "./component/Context/Context.jsx";
import { BrowserRouter as Router } from "react-router-dom";

// Create a root element to render the React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the entire app in MyProvider to manage global state */}
    <MyProvider>
      {/* Use Router for handling client-side routing */}
      <Router>
        {/* Render the main App component */}
        <App />
      </Router>
    </MyProvider>
  </React.StrictMode>
);
