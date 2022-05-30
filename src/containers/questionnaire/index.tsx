import { Box, Typography } from "@material-ui/core";
import Button from "../../components/Button";
import LinearProgressBar from "../../components/linearProgressBar";
import PaymentPlanBox from "../../components/paymentPlanBox";
import ArrowLongLeftIcon from "../../Icons/ArrowLongLeft";
import ArrowLongRightIcon from "../../Icons/ArrowLongRight";
import CustomSelect from "../../components/CustomSelect";
import TextBox from "../../components/TextBox";
import useStyles from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";

const Questionnaire = () => {
  const css = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <TextBox>
        Help us get to know your circumstances a bit better by providing the
        details below:
      </TextBox>

      <Box className={css.oneTimePaymentBoxStyle}>
        <Box className={css.oneTimePaymentInsideBoxStyle}>
          <Box className={css.questionnaireRowStyle}>
            <TextBox>1. What is your monthly rent/mortgage?</TextBox>
            <CustomSelect
              itemData={[
                "Delay Start Date",
                "Lower Monthly Amount",
                "Greater Plan Flexibility",
              ]}
            />
          </Box>
          <Box className={css.questionnaireRowDividerLine}></Box>
          <Box className={css.questionnaireRowStyle}>
            <TextBox>2. What is your monthly income from all sources?</TextBox>
            <CustomSelect
              itemData={[
                "Delay Start Date",
                "Lower Monthly Amount",
                "Greater Plan Flexibility",
              ]}
            />
          </Box>
          <Box className={css.questionnaireRowDividerLine}></Box>
          <Box className={css.questionnaireRowStyle}>
            <TextBox>3. What would make it easier for you to pay?</TextBox>
            <CustomSelect
              itemData={[
                "Delay Start Date",
                "Lower Monthly Amount",
                "Greater Plan Flexibility",
              ]}
            />
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
        Your current balance does not include any applicable discounts on your
        account. It may take up to 30 days after final payment for the discount
        to be applied and your remaining balance to be resolved.
      </Typography>
      <Typography>We are not obliged to renew any offers.</Typography>
      <Typography>
        Please understand that this is a communication from a debt collector.
        This is an attempt to collect a debt. Any information obtained will be
        used for that purpose.
      </Typography>
    </Box>
  );
};

export default Questionnaire;
