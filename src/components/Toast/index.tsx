import React, { memo, FC, ReactNode } from 'react'
import classNames from 'classnames'

import style from './style.module.scss';
import Button from 'components/Button';

export interface IToastProps {
  title?: string,
  children: ReactNode,
  onDismiss: (() => void),
  info?: boolean,
  error?: boolean,
  warning?: boolean,
  success?: boolean,
  visible?: boolean,
}

const Toast: FC<IToastProps> = ({ title, children, onDismiss, info, error, warning, success, visible = true }) => {

  const wrapperClasses = classNames({
    [style.toast]: true,
    [style.danger]: error,
    [style.info]: info,
    [style.warning]: warning,
    [style.success]: success,
    [style.visible]: visible,
  })
  
  return (
    <div className={wrapperClasses} >
      <div className={style.header}>
        <p>{title}</p>
        <Button onClick={onDismiss} icon="delete" />
      </div>
      {children && (
        <div className={style.body}>
          {children}
        </div>
      )}
    </div>
  )
}

export default memo(Toast)
