import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import WithTheme from "./containers/oneTimePayment/withTheme";
import Questionnaire from "./containers/questionnaire";
import OneTimePayment from "./containers/oneTimePayment";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/index";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div>
        <OneTimePayment />
      </div>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
