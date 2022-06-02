import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accountSummaryBoxStyle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: 'fit-content',
      padding: "12px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E0E0E0",
      boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.03)",
      borderRadius: "6px",
    },
    accountSummaryBorderCircleStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90px",
      minWidth: "90px",
      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%237AC143FF' stroke-width='12' stroke-dasharray='2%2c 18' stroke-dashoffset='43' stroke-linecap='square'/%3e%3c/svg%3e"); border-radius: 100px;`,
    },
    accountSummaryBorderCircleTextStyle: {
      fontWeight: 800,
      fontSize: "14px",
      color: "#0069AA",
    },
    accountSummaryTextContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "0px 12px",
    },
    accountSummaryTextHeadingStyle: {
      fontWeight: 700,
      fontSize: "18px",
      color: "#0069AA",
    },
    accountSummaryTextDescriptionStyle: {
      fontWeight: 400,
      fontSize: "14px",
      color: "#363636",
    },
    accountSummaryButtonStyle: {
      width: "160px",
      height: "50px",
      backgroundColor: "#7AC143",
      borderRadius: "6px",
      fontWeight: 700,
      fontSize: "14px",
      color: "#FFFFFF",
    },
  })
);

export default useStyles;
