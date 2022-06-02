import { useEffect } from "react";
import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import PaymentBox from "../../components/paymentBox";
import ArrowLongLeftIcon from "../../Icons/ArrowLongLeft";
import ArrowLongRightIcon from "../../Icons/ArrowLongRight";
import PaymentSidebar from "../paymentSidebar";
import statusApi from "../../apis/statusApi";
import useStyles from "./styles";

const AccountSummaryBox = () => {
  const css = useStyles();

  return (
    <div className={css.accountSummaryBoxStyle}>
      <div className={css.accountSummaryBorderCircleStyle}>
        <TextBox className={css.accountSummaryBorderCircleTextStyle}>Note</TextBox>
      </div>
      <div className={css.accountSummaryTextContainer}>
        <TextBox className={css.accountSummaryTextHeadingStyle}>
          Here are some options for making a payment on your account
        </TextBox>
        <TextBox className={css.accountSummaryTextDescriptionStyle}>
          Please click 'Pay Now' to pay your balance in full or click 'Set up a
          payment plan' below to select an available payment plan for your
          account.
        </TextBox>
      </div>
      <div>
        <Button label="Pay Now" className={css.accountSummaryButtonStyle}/>
      </div>
    </div>
  );
};

export default AccountSummaryBox;
