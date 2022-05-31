import Checkbox from "../Checkbox";

import React, { ReactNode, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

export interface SideNavigationBoxProps {
  title?: string;
  description?: string;
  icon: ReactNode;
  onClick?: () => void;
}

const SideNavigationBox = ({ title, description,icon, onClick, ...props }: SideNavigationBoxProps) => {
  const css = useStyles();

  return (
    <Box className={css.sideNavigationBoxContainer}>
      <Box>
      {icon}
      </Box>
      <Typography className={css.sideNavigationBoxTitleTextStyle}>
      Set up a payment plan {title}
      </Typography>

      <Typography className={css.sideNavigationBoxDescriptionTextStyle}>
      Pay off your balance with a recurring payment over time. {description}
      </Typography>
    </Box>
  );
};

export default SideNavigationBox;
