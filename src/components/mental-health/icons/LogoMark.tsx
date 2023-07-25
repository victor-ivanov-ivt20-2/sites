import { IconProps } from "@/models/icon";
import { FC } from "react";

const LogoMarkIcon: FC<IconProps> = (props) => {
  const { width = 36, height = 36, fill = "#926247" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill={fill}
        d="M18 22a7 7 0 110 14 7 7 0 010-14zM7 11a7 7 0 110 14 7 7 0 010-14zM18 0a7 7 0 110 14 7 7 0 010-14zM29 11a7 7 0 110 14 7 7 0 010-14z"
      ></path>
    </svg>
  );
};

export default LogoMarkIcon;
