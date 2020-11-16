import React, { FC, memo } from "react";
import classNames from "classnames";

import "./styles.scss";

export interface ITitleProps {
  children?: string;
  className?: string;
  fixed?: boolean;
}
const Title: FC<ITitleProps> = ({ children, fixed = false }) => {
  const headerClasses = classNames("title", {
    fixed: fixed,
  });
  return (
    <>
      <div className={headerClasses}>
        <h1>{children}</h1>
      </div>
      {fixed && <div className="headerSpace"></div>}
    </>
  );
};

export default memo(Title);
