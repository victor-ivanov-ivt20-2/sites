import { IconProps } from "@/models/icon";
import { FC } from "react";

const PhoneIcon: FC<IconProps> = (props) => {
  const { height = 24, width = 24, fill = "#4B3425" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={fill}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6a14 14 0 0014 14M4 6a3 3 0 013-3v0a3 3 0 013 3v0a3 3 0 01-3 3v0a3 3 0 01-3-3v0z"
      ></path>
      <path
        stroke={fill}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 17a3 3 0 013-3v0a3 3 0 013 3v0a3 3 0 01-3 3v0a3 3 0 01-3-3v0z"
      ></path>
    </svg>
  );
};

export default PhoneIcon;
