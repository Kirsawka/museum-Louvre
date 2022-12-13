import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./store/store";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename='/museum-louvre'>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
