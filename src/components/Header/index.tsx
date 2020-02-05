import React, { FC, ReactNode, memo } from 'react'
import classNames from 'classnames'

import style from './style.module.scss'

export interface IHeaderProps {
  title: string,
  children?: ReactNode,
  className?: string,
  fixed?: boolean,
}
const Header: FC<IHeaderProps> = ({ title, children, className = '', fixed = false }) => {
  const headerClasses = classNames({
    [style.headerContainer]: true,
    [className]: className,
    [style.fixed]: fixed,
  })
  return <>
    <div className={headerClasses}>
      <h1>{title}</h1>
      {children}
    </div>
    {fixed && (
      <div className={style.headerSpace}></div>
    )}
  </>
}

export default memo(Header)