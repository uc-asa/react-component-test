import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import WithTheme from "./containers/oneTimePayment/withTheme";

ReactDOM.render(
  <React.StrictMode>
      <div>
        <WithTheme />
      </div>
  </React.StrictMode>,

  document.getElementById("root")
);
