import { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import Button from "../../components/Button";
import LinearProgressBar from "../../components/linearProgressBar";
import PaymentBox from "../../components/paymentBox";
import ArrowLongLeftIcon from "../../Icons/ArrowLongLeft";
import ArrowLongRightIcon from "../../Icons/ArrowLongRight";
import PaymentSidebar from "../paymentSidebar";
import statusApi from "../../apis/statusApi";
import useStyles from "./styles";

const OneTimePayment = () => {
  const css = useStyles();

  const getWorkableStatus = async () => {
    const payload = { content: { consumerId: 12345678 } };
    const { data } = await statusApi.getWorkableStatus(payload);
    console.log(data, "data");
  };

  useEffect(() => {
    getWorkableStatus();
  }, []);

  return (
    <Box>
      <Box display="flex" flexDirection="row">
        <Box className={css.oneTimePaymentMainContainer}>
          <Typography className={css.oneTimePaymentHeadingTextStyle}>
            Make a One Time Payment
          </Typography>
          <Box className={css.oneTimePaymentBoxStyle}>
            <Box className={css.oneTimePaymentInsideBoxStyle}>
              <Box mb={4}>
                <LinearProgressBar />
              </Box>
              <Typography className={css.oneTimePaymentDescriptionTextStyle}>
                You can pay the entire amount. Paying less than the balance will
                not resolve your account.
              </Typography>
              <Box className={css.oneTimePaymentBoxItemStyle}>
                <PaymentBox />
                <PaymentBox />
                <PaymentBox />
              </Box>
            </Box>
            <Box className={css.oneTimePaymentBoxNavigationContainer}>
              <Button
                className={css.oneTimePaymentBoxBackButtonStyle}
                label={
                  <>
                    <ArrowLongLeftIcon style={{ marginRight: "12px" }} />
                    <Typography>Back</Typography>
                  </>
                }
              />
              <Button
                className={css.oneTimePaymentBoxNextButtonStyle}
                label={
                  <>
                    <Typography>Next</Typography>
                    <ArrowLongRightIcon style={{ marginLeft: "12px" }} />
                  </>
                }
              />
            </Box>
          </Box>
          <Typography>
            1It may take 1-2 business days for payments to post to your account.
            Your current balance does not include any applicable discounts on
            your account. It may take up to 30 days after final payment for the
            discount to be applied and your remaining balance to be resolved.
          </Typography>
          <Typography>We are not obliged to renew any offers.</Typography>
          <Typography>
            Please understand that this is a communication from a debt
            collector. This is an attempt to collect a debt. Any information
            obtained will be used for that purpose.
          </Typography>
        </Box>
        <PaymentSidebar />
      </Box>
      <PaymentSidebar />
    </Box>
  );
};

export default OneTimePayment;
