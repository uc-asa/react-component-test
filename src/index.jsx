import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
// import reportWebVitals from "./reportWebVitals";
import WithTheme from "./containers/oneTimePayment/withTheme";
import SetupPaymentPlan from "./containers/setupPaymentPlan";
import OneTimePayment from "./containers/oneTimePayment";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div>
        <SetupPaymentPlan />
      </div>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
