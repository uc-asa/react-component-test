import { Box, Typography } from "@material-ui/core";
import Button from "../../components/Button";
import LinearProgressBar from "../../components/linearProgressBar";
import PaymentPlanBox from "../../components/paymentPlanBox";
import ArrowLongLeftIcon from "../../Icons/ArrowLongLeft";
import ArrowLongRightIcon from "../../Icons/ArrowLongRight";
import PaymentSidebar from "../paymentSidebar";
import useStyles from "./styles";

const SetupPaymentPlan = () => {
  const css = useStyles();

  return (
    <Box display="flex" flexDirection="row">
      <Box className={css.oneTimePaymentMainContainer}>
        <Typography className={css.oneTimePaymentHeadingTextStyle}>
          Set up a payment plan
        </Typography>
        <Box className={css.oneTimePaymentBoxStyle}>
          <Box className={css.oneTimePaymentInsideBoxStyle}>
            <Box mb={4}>
              <LinearProgressBar />
            </Box>
            <Typography className={css.oneTimePaymentDescriptionTextStyle}>
              Which plan works best for you?
            </Typography>
            <Box>
              <Typography>Plan Start Date</Typography>
            </Box>
            <Box className={css.setupPaymentPlanDownPaymentTextBoxStyle}>
              <Typography
                className={css.setupPaymentPlanDownPaymentTypeTextStyle}
              >
                Monthly Payment Plans
              </Typography>
              <Typography
                className={css.setupPaymentPlanDownPaymentAmountTextStyle}
              >
                $20 Down Payment
              </Typography>
            </Box>
            <Box className={css.oneTimePaymentBoxItemStyle}>
              <PaymentPlanBox />
              <PaymentPlanBox />
              <PaymentPlanBox />
            </Box>

            <Box mt={10} className={css.setupPaymentPlanDownPaymentTextBoxStyle}>
              <Typography
                className={css.setupPaymentPlanDownPaymentTypeTextStyle}
              >
                Bi-weekly Payment Plans
              </Typography>
              <Typography
                className={css.setupPaymentPlanDownPaymentAmountTextStyle}
              >
                $10 Down Payment
              </Typography>
            </Box>
            <Box className={css.oneTimePaymentBoxItemStyle}>
              <PaymentPlanBox />
              <PaymentPlanBox />
              <PaymentPlanBox />
            </Box>
            <Typography
                className={css.setupPaymentPlanOrTextStyle}
              >
                or
              </Typography>

              <Typography
                className={css.setupPaymentPlanCreateOwnPlanTextStyle}
              >
                Not interested in the above plans? Create your own plan
              </Typography>
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
          Your current balance does not include any applicable discounts on your
          account. It may take up to 30 days after final payment for the
          discount to be applied and your remaining balance to be resolved.
        </Typography>
        <Typography>We are not obliged to renew any offers.</Typography>
        <Typography>
          Please understand that this is a communication from a debt collector.
          This is an attempt to collect a debt. Any information obtained will be
          used for that purpose.
        </Typography>
      </Box>
      <PaymentSidebar />
    </Box>
  );
};

export default SetupPaymentPlan;
