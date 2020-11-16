import React, { memo, FC, ReactNode } from "react";
import classNames from "classnames";
import Button from "components/Button";
import Icon from "components/Icon";
import "./styles.scss";
import { useModifier } from "hooks/useModifier";

export interface IToastProps {
  title?: string;
  children: ReactNode;
  onDismiss: () => void;
  modifier?: string;
}

const Toast: FC<IToastProps> = ({ title, children, onDismiss, modifier }) => {
  const wrapperClasses = useModifier("toast", modifier);

  return (
    <div className={wrapperClasses}>
      <div className="toast__header">
        <p>{title}</p>
        <Button onClick={onDismiss} label={<Icon name="delete" />} />
      </div>
      {children && <div className="toast__body">{children}</div>}
    </div>
  );
};

export default memo(Toast);
