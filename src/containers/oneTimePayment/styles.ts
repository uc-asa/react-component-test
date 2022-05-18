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
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #E0E0E0",
      boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.03)",
      borderRadius: "6px",
    },
    oneTimePaymentInsideBoxStyle:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: '22px 32px 68px'
    },
    oneTimePaymentDescriptionTextStyle: {
      // fontWeight: "700 !important",
      fontSize: "16px !important",
      // color: theme.mcmColorTheme.black,
      marginBottom: "86px !important",
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
      // backgroundColor: theme.mcmColorTheme.regalBlue,
      width: '94%'
    },
    oneTimePaymentBoxBackButtonStyle:{
      color: `${theme.mcmColorTheme.white} !important`,
      borderRadius: '6px',
    },
    oneTimePaymentBoxNextButtonStyle:{
      backgroundColor: `${theme.mcmColorTheme.mantisGreen} !important`,
      color: `${theme.mcmColorTheme.white} !important`,
      borderRadius: '6px',
      padding: '16px 42px !important'
    }
  })
);

export default useStyles;
