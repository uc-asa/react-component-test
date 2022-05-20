import theme from "../../theme";
import { ThemeProvider } from "@material-ui/core/styles";
import OneTimePayment from ".";

const WithTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <OneTimePayment />
    </ThemeProvider>
  );
};

export default WithTheme;
