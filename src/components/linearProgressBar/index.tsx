import Checkbox from "../Checkbox";

import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

export interface LinearProgressBarProps {
  title?: string;
  payment?: string;
}

const LinearProgressBar = ({ title, payment, ...props }: LinearProgressBarProps) => {
  const [selected, setSelected] = useState(true);
  const css = useStyles({ selected });

  return (
    <Box className={css.linearProgressBarContainer}>
     <Box className={css.linearProgressBarInsideLineStyle}></Box>
    </Box>
  );
};

export default LinearProgressBar;
