import React, { FC, memo } from 'react'
import classNames from 'classnames'

import style from './style.module.scss'

export interface ITitleProps {
  children?: string,
  className?: string,
  fixed?: boolean,
}
const Title: FC<ITitleProps> = ({ children, className = '', fixed = false }) => {
  const headerClasses = classNames({
    [style.title]: true,
    [className]: className,
    [style.fixed]: fixed,
  })
  return <>
    <div className={headerClasses}>
      <h1>{children}</h1>
    </div>
    {fixed && (
      <div className={style.headerSpace}></div>
    )}
  </>
}

export default memo(Title)