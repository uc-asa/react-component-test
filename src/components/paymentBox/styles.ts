import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export interface IStyleProps {
  selected?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paymentBoxContainer: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "250px",
      height: "280px",
      padding: "12px 20px 28px",
      margin: "10px",
      backgroundColor: (props: IStyleProps) => {
        return props.selected === true ? "#0069AA" : "#FFFFFF";
      },
      border: "1px solid #E0E0E0",
      boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.03)",
      borderRadius: "6px",
    },
    paymentBoxRecommendTextStyle: {
      // fontWeight: "700 !important",
      fontSize: "12px !important",
      textAlign: "center",
      color: (props: IStyleProps) => {
        return props.selected === true ? "#FFFFFF" : "#0069AA";
      },
    },
    paymentBoxCheckBoxStyle: {
      position: "absolute",
      right: "10px",
      top: "10px",
    },
    paymentBoxAmountContainer: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    paymentBoxAmountTextStyle: {
      // fontWeight: "800 !important",
      fontSize: "24px !important",
      color: "#FFFFFF",
    },
    paymentBoxAmountInputContainer: {
      borderBottom: "1px dashed",
      borderColor: (props: IStyleProps) => {
        return props.selected === true ? "#FFFFFF" : "#0069AA";
      },
    },
    paymentBoxAmountInputStyle: {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      textAlign: "center",
      "&:focus": {
        outline: "none",
      },
      color: (props: IStyleProps) => {
        return props.selected === true ? "#FFFFFF" : "#0069AA";
      },
    },
    paymentBoxPaymentNameTextStyle: {
      // fontWeight: "700 !important",
      fontSize: "18px !important",
      textAlign: "center",
      color: (props: IStyleProps) => {
        return props.selected === true ? "#FFFFFF" : "#0069AA";
      },
      marginBottom: "20px",
    },
    paymentBoxPaymentDescriptionTextStyle: {
      // fontWeight: "400 !important",
      fontSize: "14px !important",
      textAlign: "center",
      color: (props: IStyleProps) => {
        return props.selected === true ? "#E0E0E0" : "#555555";
      },
    },
  })
);

export default useStyles;
