import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header/Header";
import Editor from "./components/Editor/Editor";
import Ticker from "./components/Ticker/Ticker";

const App = function () {
  return (
    <>
      <Ticker />
      <Editor />
    </>
  );
};

// const view = App("pywebview");
// const element = document.getElementById("app");
// ReactDOM.render(view, element);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
