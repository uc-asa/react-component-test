import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paymentSidebarMainContainer: {
      display: "flex",
      flexDirection: "column",
      margin: "22px",
    },
    paymentSidebarItemContainer: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #E0E0E0",
      boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.05)",
      borderRadius: "6px",
      padding: "20px 28px",
      width: "320px",
      marginBottom: "12px",
    },
    paymentSidebarItemRowContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    paymentSidebarHeaderContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    paymentSidebarHeaderTextStyle: {
      // fontWeight: "700 !important",
      fontSize: "14px !important",
      lineHeight: "18px !important",
      color: theme.mcmColorTheme.black,
      marginLeft: '8px !important'
    },
  })
);

export default useStyles;
