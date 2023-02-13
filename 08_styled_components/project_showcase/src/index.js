import React from "react";
import ReactDOM from "react-dom";

// BrowserRouter => Provides Context For All Other "react-router-dom" Components
  // <Switch />
  // <Route />
  // <Link /> / <NavLink />
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
