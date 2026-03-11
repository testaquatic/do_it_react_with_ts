import type { DetailedHTMLProps } from "react";

export type ReactButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = ReactButtonProps & {};

export const Button = ({
  className: _className,
  ...buttonProps
}: ButtonProps) => {
  const className = ["btn", _className].join(" ");
  return <button {...buttonProps} className={className}></button>;
};
