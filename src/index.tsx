import React from "react";
import ReactDOM from "react-dom";
import App from "./example";

ReactDOM.render(
  <React.StrictMode>
    <p>Make sure this page is run from either Tableau directly or the <a href="https://tableau.github.io/webdataconnector/Simulator/">simulator</a> but <b>not</b> directly in the browser</p>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
