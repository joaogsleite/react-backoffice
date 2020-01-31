import React, { FC, ReactNode, memo } from 'react'
import classNames from 'classnames'

import style from './style.module.scss'

export interface IHeaderProps {
  title: string,
  children?: ReactNode,
  className?: string,
}
const Header: FC<IHeaderProps> = ({ title, children, className }) => {
  return (
    <div className={classNames(style.headerContainer, className)}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default memo(Header)