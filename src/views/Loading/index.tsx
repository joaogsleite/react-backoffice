import React, { FC, ReactNode, memo } from "react";
import "./styles.scss";

export interface ILoadingProps {
  children?: ReactNode;
}

const Loading: FC<ILoadingProps> = ({ children = null }) => {
  return (
    <div className="loading__container">
      {children}
      Loading...
    </div>
  );
};

export default memo(Loading);
