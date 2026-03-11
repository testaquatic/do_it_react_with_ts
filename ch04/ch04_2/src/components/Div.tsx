import type {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import type { WidthHeight } from "./WidthHeight";
import type { LeftRightTopBottom } from "./LeftRightTopBottom";
import type { MinMaxWidthHeight } from "./MinMaxWidthHeight";

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom &
  MinMaxWidthHeight & { src?: string };

export const Div = ({
  width,
  height,
  style: _style,
  src,
  left,
  right,
  top,
  bottom,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  ...props
}: DivProps) => {
  const sytle = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
    left,
    right,
    top,
    bottom,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
  };

  return <div {...props} style={sytle}></div>;
};
