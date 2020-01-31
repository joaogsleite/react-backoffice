import React, { FC, ReactNode, memo } from 'react'
import classNames from 'classnames'

export interface IColumnsProps {
  children: ReactNode,
  className?: string,
}

const Columns: FC<IColumnsProps> = ({ children, className = '' }) => {
  
  const columnClasses = classNames({
    'columns': true,
    [className]: className,
  })
  
  return <div className={columnClasses}>
    {children}
  </div>
}

export default memo(Columns)