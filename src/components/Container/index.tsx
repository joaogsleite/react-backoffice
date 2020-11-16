import React, { FC, memo, ReactNode } from "react";
import "./styles.scss";

export interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default memo(Container);
