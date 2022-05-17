import Checkbox from "../Checkbox";

import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

export interface PaymentBoxProps {
  title?: string;
  payment?: string;
  onClick?: () => void;
}

const PaymentBox = ({ title, payment, onClick, ...props }: PaymentBoxProps) => {
  const [selected, setSelected] = useState(true);
  const css = useStyles({ selected });

  return (
    <Box className={css.paymentBoxContainer}>
      <Typography className={css.paymentBoxRecommendTextStyle}>
        Recommended
      </Typography>

      <Checkbox
        className={css.paymentBoxCheckBoxStyle}
        value={selected}
        onClick={() => {
          console.log('hit')
          setSelected(!selected);
        }}
      />
      <Box className={css.paymentBoxAmountContainer}>
        <Typography className={css.paymentBoxAmountTextStyle}>$6000</Typography>
        <Box className={css.paymentBoxAmountInputContainer}>
          <input className={css.paymentBoxAmountInputStyle} />
        </Box>
      </Box>

      <Typography className={css.paymentBoxPaymentNameTextStyle}>
        Full Payment
      </Typography>

      <Typography className={css.paymentBoxPaymentDescriptionTextStyle}>
        Resolve your debt all at once and don't let any debt push you down
      </Typography>
    </Box>
  );
};

export default PaymentBox;
