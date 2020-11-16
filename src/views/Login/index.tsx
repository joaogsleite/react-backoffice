import React, { FC, memo } from "react";
import "./styles.scss";

export interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  return <div className="login__container">Login view</div>;
};

export default memo(Login);
