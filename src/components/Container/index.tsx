import React, { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

import style from './style.module.scss'

export interface IContainerProps {
  children: ReactNode,
  className?: string,
}

const Container: FC<IContainerProps> = ({ children, className = '' }) => {

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
