import React, { memo, FC, ReactNode } from 'react'
import classNames from 'classnames'

export interface IAlertProps {
  title?: string,
  children: ReactNode,
  onDismiss: (() => void),
  info?: boolean,
  error?: boolean,
  success?: boolean,
}

const Alert: FC<IAlertProps> = ({ title, children, onDismiss, info, error, success }) => {

  const wrapperClasses = classNames({
    'message': true,
    'is-danger': error,
    'is-info': info,
    'is-success': success,
  })
  
  return (
    <div className={wrapperClasses} onClick={onDismiss}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      {children && (
        <div className="message-body">
          {children}
        </div>
      )}
    </div>
  )
}

export default memo(Alert)
