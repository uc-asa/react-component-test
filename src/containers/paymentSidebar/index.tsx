import { Typography, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Button from "../../components/Button";
import CheckIcon from "../../Icons/Check";
import useStyles from "./styles";

const PaymentSidebar = () => {
  const css = useStyles();

  return (
    <Box className={css.paymentSidebarMainContainer}>
      <Box className={css.paymentSidebarItemContainer}>
        <Box className={css.paymentSidebarHeaderContainer}>
          <CheckIcon/>
          <Typography className={css.paymentSidebarHeaderTextStyle}>
            Make a one-time payment
          </Typography>
        </Box>

        <Box className={css.paymentSidebarItemRowContainer}>
          <Typography>Current balance</Typography>
          <Typography>$1,234.56</Typography>
        </Box>

        <Box className={css.paymentSidebarItemRowContainer}>
          <Typography>Due today</Typography>
          <Typography>$1,234.56</Typography>
        </Box>
      </Box>
      <Box className={css.paymentSidebarItemContainer}>
        <Box className={css.paymentSidebarHeaderContainer}>
        <CheckIcon/>
          <Typography className={css.paymentSidebarHeaderTextStyle}>
            Select payment method
          </Typography>
        </Box>
      </Box>
      <Box className={css.paymentSidebarItemContainer}>
        <Box className={css.paymentSidebarHeaderContainer}>
        <CheckIcon/>
          <Typography className={css.paymentSidebarHeaderTextStyle}>
            Confirm plan and pay
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentSidebar;
