import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    oneTimePaymentMainContainer: {
      display: "flex",
      flexDirection: "column",
      margin: "18px",
    },
    oneTimePaymentHeadingTextStyle: {
      // fontWeight: "700 !important",
      fontSize: "24px !important",
      color: theme.mcmColorTheme.black,
      marginBottom: "15px !important",
    },
    oneTimePaymentBoxStyle: {
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
      border: "1px solid #E0E0E0",
      boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.03)",
      borderRadius: "6px",
    },
    oneTimePaymentInsideBoxStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "22px 32px 68px",

    },
    questionnaireRowStyle:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    questionnaireRowDividerLine:{
      height: '1px',
      backgroundColor: '#E2E2E2',
      width: '100%',
      margin: '20px 0px',
    },
    setupPaymentPlanDownPaymentTextBoxStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    setupPaymentPlanDownPaymentTypeTextStyle: {
      // fontWeight: "700 !important",
      fontSize: "18px !important",
      color: theme.mcmColorTheme.accentBlue,
    },
    setupPaymentPlanDownPaymentAmountTextStyle: {
      // fontWeight: "400 !important",
      fontSize: "14px !important",
      color: theme.mcmColorTheme.black,
    },
    setupPaymentPlanOrTextStyle: {
      // fontWeight: "700 !important",
      fontSize: "18px !important",
      color: theme.mcmColorTheme.silver,
      margin: '30px auto'
    },
    setupPaymentPlanCreateOwnPlanTextStyle: {
      // fontWeight: "500 !important",
      fontSize: "14px !important",
      color: theme.mcmColorTheme.accentBlue,
      textDecoration: "underline",
    },
    oneTimePaymentBoxItemStyle: {
      display: "flex",
      flexDirection: "row",
    },
    oneTimePaymentBoxNavigationContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 30px",
      backgroundColor: theme.mcmColorTheme.regalBlue,
      width: "94%",
    },
    oneTimePaymentBoxBackButtonStyle: {
      color: `${theme.mcmColorTheme.white} !important`,
      borderRadius: "6px",
    },
    oneTimePaymentBoxNextButtonStyle: {
      backgroundColor: `${theme.mcmColorTheme.mantisGreen} !important`,
      color: `${theme.mcmColorTheme.white} !important`,
      borderRadius: "6px",
      padding: "16px 42px !important",
    },
  })
);

export default useStyles;
