import { useModifier } from "hooks/useModifier";
import React, { memo, MouseEvent, FC } from "react";
import "./styles.scss";

export interface IButtonProps {
  label?: string | JSX.Element;
  prefix?: string | JSX.Element;
  suffix?: string | JSX.Element;
  modifier?: string;
  disabled?: boolean;
  onClick: (event: MouseEvent) => void;
}

const Button: FC<IButtonProps> = ({
  disabled,
  prefix,
  label,
  suffix,
  modifier,
  onClick,
  children,
}) => {
  const stylesCN = useModifier("button", modifier, {
    "button--disabled": disabled,
  });

  return (
    <button
      className={stylesCN}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {prefix ? (
        <span className="button__prefix-container">{prefix}</span>
      ) : null}
      {label ? <span className="button__label"> {label} </span> : null}
      {suffix ? (
        <span className="button__suffix-container">{suffix}</span>
      ) : null}
      {children}
    </button>
  );
};

export default memo(Button);
