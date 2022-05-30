import { Box } from "@material-ui/core";

import useStyles from "./styles";

export interface TextBoxProps {
  children?: string;
  className?: string;
}

const TextBox = ({ children, className, ...props }: TextBoxProps) => {
  const css = useStyles();
  return (
    <Box className={`${css.textBoxStyle} ${className}`} {...props}>
      {children}
    </Box>
  );
};

export default TextBox;
