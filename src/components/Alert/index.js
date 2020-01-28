import React, { memo } from 'react'
import classNames from 'classnames'

function Alert({ title, children, onDismiss, info, error, success }) {

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
