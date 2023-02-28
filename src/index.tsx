import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";
import { Provider } from "react-redux";
import Store from "./Components/Redux/Store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
