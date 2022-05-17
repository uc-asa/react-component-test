import CheckIcon from '../../Icons/Check'
import useStyles from "./styles";

export interface CheckboxProps {
  title?: string;
  value?: boolean;
  onClick?: () => void;
  className?: string;
}

const Checkbox = ({
  title,
  value,
  onClick,
  className,
  ...props
}: CheckboxProps) => {
  const classes = useStyles();

  return (
    <a
      className={`${classes.checkboxContainer} ${className}`}
      onClick={onClick}
      {...props}
    >
      {value && (
        <CheckIcon height={15} color="white"/>
      )}
    </a>
  );
};

export default Checkbox;
