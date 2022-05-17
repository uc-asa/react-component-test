import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from "@material-ui/core/Button";
import { ReactNode } from "react";

import useStyles from "./styles";

export interface ButtonProps extends MaterialButtonProps {
  label?: string | ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  const classes = useStyles();

  return (
    <MaterialButton
      color="primary"
      component="button"
      disableElevation
      disableRipple={false}
      classes={{ root: classes.buttonStyle }}
      {...props}
    >
      {label}
    </MaterialButton>
  );
};

export default Button;
