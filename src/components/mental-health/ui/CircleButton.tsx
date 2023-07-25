import { CircleButtonProps } from "@/models/button";
import { FC } from "react";

const CircleButton: FC<CircleButtonProps> = (props) => {
  const { Icon, className = "bg-white", height = 64, width = 64 } = props;
  return (
    <button
      style={{ height, width }}
      className={`${
        className ? className + " " : ""
      }rounded-full flex justify-center items-center`}
    >
      <Icon width={24} height={24} />
    </button>
  );
};

export default CircleButton;
