import { ComponentProps, FC, PropsWithChildren } from "react";
import { SizeProps } from "./size";
import { IconProps } from "./icon";

export interface CircleButtonProps extends Partial<SizeProps> {
  Icon: FC<IconProps>;
  className?: ComponentProps<"div">["className"];
}
