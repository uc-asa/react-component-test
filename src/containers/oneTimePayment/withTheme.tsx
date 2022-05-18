import { Box, Typography } from "@material-ui/core";
import Button from "../../components/Button";
import LinearProgressBar from "../../components/linearProgressBar";
import PaymentBox from "../../components/paymentBox";
import ArrowLongLeftIcon from "../../Icons/ArrowLongLeft";
import ArrowLongRightIcon from "../../Icons/ArrowLongRight";
import theme from "../../theme";
import { ThemeProvider } from "@material-ui/core/styles";
import PaymentSidebar from "../paymentSidebar";
import useStyles from "./styles";
import OneTimePayment from ".";

const WithTheme = () => {
  const css = useStyles();

  return (
    <ThemeProvider theme={theme}>
     {/* <ThemeProvider theme={theme}> */}
     <div>
        <OneTimePayment />
      </div>
    {/* </ThemeProvider> */}
    </ThemeProvider>
  );
};

export default WithTheme;
