import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideNavigationBoxContainer: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "250px",
      height: "280px",
      padding: "12px 20px 28px",
      margin: "10px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E0E0E0",
      boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.03)",
      borderRadius: "6px",
    },
    sideNavigationBoxTitleTextStyle: {
      // fontWeight: "700 !important",
      fontSize: "18px !important",
      textAlign: "center",
      marginBottom: "20px",
    },
    sideNavigationBoxDescriptionTextStyle: {
      // fontWeight: "400 !important",
      fontSize: "14px !important",
      textAlign: "center",
    },
  })
);

export default useStyles;
