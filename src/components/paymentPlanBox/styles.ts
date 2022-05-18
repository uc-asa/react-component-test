import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export interface IStyleProps {
  selected?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  paymentPlanBoxContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "250px",
    height: "130px",
    padding: "12px 20px 28px",
    margin: "10px",
    backgroundColor: (props: IStyleProps) => {
      return props.selected === true ? "#0069AA" : "#FFFFFF";
    },
    border: "1px solid #E0E0E0",
    boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.03)",
    borderRadius: "6px",
  },
  paymentPlanBoxRecommendTextStyle: {
    fontWeight: 700,
    fontSize: "12px",
    textAlign: "center",
    color: (props) => {
      return props.selected === true ? "#FFFFFF" : "#0069AA";
    },
  },
  paymentPlanBoxCheckBoxStyle: {
    position: "absolute",
    right: "10px",
    top: "10px",
  },
  paymentPlanBoxAmountContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paymentPlanBoxAmountTextStyle: {
    fontWeight: 800,
    fontSize: "24px",
    color: "#FFFFFF",
  },
  paymentPlanBoxPaymentDescriptionTextStyle: {
    fontWeight: 400,
    fontSize: "14px",
    textAlign: "center",
    color: (props: IStyleProps) => {
      return props.selected === true ? "#E0E0E0" : "#555555";
    },
  },
}));

export default useStyles;
