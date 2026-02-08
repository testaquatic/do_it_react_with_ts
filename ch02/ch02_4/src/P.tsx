import type { ReactNode } from "react";

export type PProps = {
  children?: ReactNode;
};

export const P = (props: PProps) => {
  const { children } = props;
  return <p children={children}></p>;
};
