import React, { FC, memo } from "react";
import "./styles.scss";

const TopMenu: FC = () => {
  return (
    <nav
      className="topMenu"
      role="navigation"
      aria-label="main navigation"
    ></nav>
  );
};

export default memo(TopMenu);
