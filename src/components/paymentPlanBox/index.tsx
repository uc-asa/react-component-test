import Box from "@material-ui/core/Box";
import Checkbox from "../Checkbox";

import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

export interface PaymentPlanBoxProps {
  title?: string;
  payment?: string;
  discount?: string;
  installment?: string;
  onClick?: () => void;
}

const PaymentPlanBox = ({
  title,
  discount,
  installment,
  payment,
  onClick,
  ...props
}: PaymentPlanBoxProps) => {
  const [selected, setSelected] = useState(true);
  const css = useStyles({ selected });

  return (
    <Box className={css.paymentPlanBoxContainer}>
      <Checkbox
        className={css.paymentPlanBoxCheckBoxStyle}
        value={selected}
        onClick={() => {
          setSelected(!selected);
        }}
      />
      <Box className={css.paymentPlanBoxAmountContainer}>
        <Typography className={css.paymentPlanBoxAmountTextStyle}>
          $6000
        </Typography>
      </Box>
      <Typography className={css.paymentPlanBoxRecommendTextStyle}>
        Recommended
      </Typography>

      <Typography className={css.paymentPlanBoxPaymentDescriptionTextStyle}>
        Resolve your debt all at once and don't let any debt push you down
      </Typography>
    </Box>
  );
};

export default PaymentPlanBox;
