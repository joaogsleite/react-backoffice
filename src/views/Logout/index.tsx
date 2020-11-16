import React, { FC, memo } from "react";
import "./styles.scss";

export interface ILogoutProps {}

const Logout: FC<ILogoutProps> = () => {
  return <div className="logout__container">Logout view</div>;
};

export default memo(Logout);
