import { IconProps } from "@/models/icon";
import { FC } from "react";

const EmailIcon: FC<IconProps> = (props) => {
  const { height = 24, width = 24, fill = "#4B3425" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="18"
        height="14"
        x="3"
        y="5"
        stroke={fill}
        strokeLinejoin="round"
        strokeWidth="2"
        rx="7"
      ></rect>
      <path
        stroke={fill}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 6A6 6 0 016 6"
      ></path>
    </svg>
  );
};

export default EmailIcon;
