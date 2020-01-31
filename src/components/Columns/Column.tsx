import React, { memo, FC, ReactNode, CSSProperties } from 'react'
import classNames from 'classnames'

export interface IColumnProps {
  children: ReactNode,
  align?: 'left' | 'center' | 'right',
  className?: string,
}

const Column: FC<IColumnProps> = ({ children, align, className = '' }) => {
  
  const classes = classNames({
    'column': true, 
    [className]: className,
    ['has-text-'+align]: align,
  })
  
  const styles: CSSProperties = {
    textAlign: align,
  }
  
  return <div style={styles} className={classes}>
    {children}
  </div>
}

export default memo(Column)