import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import "../styles.scss";

const Logo: FC = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default memo(Logo);
