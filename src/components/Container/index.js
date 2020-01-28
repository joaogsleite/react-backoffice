import React, {memo} from 'react'
import classNames from 'classnames'

import style from './style.module.scss'

function Container({ children, className }) {

  const containerClasses = classNames({
    [style.container]: true,
    [className]: className,
  })

  return (
    <div className={containerClasses}>
      {children}
    </div>
  )
}

export default memo(Container)
