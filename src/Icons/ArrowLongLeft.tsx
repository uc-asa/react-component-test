import { IconProps, defaultIconColor } from "./types";

const ArrowLongLeftIcon = ({ defaultColor, ...props }: IconProps) => {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.264 3.8507L3.883 0.255075C4.224 -0.0837229 4.785 -0.0837229 5.137 0.255075C5.313 0.429938 5.401 0.648518 5.401 0.878026C5.401 1.10753 5.313 1.32611 5.137 1.50098L2.992 3.6212H10.109C10.351 3.6212 10.571 3.71956 10.736 3.88349C10.901 4.04742 11 4.266 11 4.50644C11 4.98732 10.604 5.39169 10.109 5.39169H3.014L5.137 7.50098C5.313 7.67584 5.401 7.89442 5.401 8.12393C5.401 8.35344 5.313 8.57202 5.137 8.74688C4.796 9.08568 4.224 9.08568 3.883 8.74688L0.264 5.14032C0.088 4.96546 0 4.74688 0 4.51737C0 4.50644 0 4.50644 0 4.49551C0 4.48458 0 4.48458 0 4.47365C0 4.24415 0.088 4.02557 0.264 3.8507Z"
        fill={defaultColor ? props.fill : "currentColor"}
      />
    </svg>
  );
};

ArrowLongLeftIcon.defaultProps = {
  fill: defaultIconColor,
};

export default ArrowLongLeftIcon;
