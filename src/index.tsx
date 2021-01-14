import React from "react";
import ReactDOM from "react-dom";
import App from "./def";
//import App from './lib/tssaconnector'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <p>Make sure this page is run from either Tableau or the simmulator</p>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
