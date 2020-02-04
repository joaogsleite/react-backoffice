import React, { FC, memo } from "react";
import Logo from "./Logo";
import style from './style.module.scss';

const TopMenu: FC = () => {
  return (
    <nav className={style.topMenuContainer} role="navigation" aria-label="main navigation">
      <Logo />
    </nav>      
  )
}

export default memo(TopMenu);