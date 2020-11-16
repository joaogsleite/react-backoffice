import React, { FC, memo } from "react";
import "../styles.scss";

const Hamburger: FC = () => {
  return (
    <>
      <input
        className="hamburger__checkbox"
        id="hamburger"
        type="checkbox"
      ></input>
      <label htmlFor="hamburger" className="hamburger__button">
        <i className="fa fa-bars"></i>
      </label>
    </>
  );
};

export default memo(Hamburger);
