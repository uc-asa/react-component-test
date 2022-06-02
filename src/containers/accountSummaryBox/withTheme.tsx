import theme from "../../theme";
import { ThemeProvider } from "@material-ui/core/styles";
import AccountSummaryBox from ".";

const WithTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <AccountSummaryBox />
    </ThemeProvider>
  );
};

export default WithTheme;
