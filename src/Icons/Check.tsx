import { IconProps, defaultIconColor } from "./types";

const CheckIcon = ({ defaultColor, ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.81818 7.22727L0.954545 4.36364L0 5.31818L3.81818 9.13636L12 0.954546L11.0455 0L3.81818 7.22727Z"
        fill={defaultColor ? props.fill : "currentColor"}
      />
    </svg>
  );
};

CheckIcon.defaultProps = {
  fill: defaultIconColor,
};

export default CheckIcon;
