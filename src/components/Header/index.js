import React from 'react'
import classNames from 'classnames'

import style from './style.module.scss'

export default function Header({ title, children, className }) {
  return (
    <div className={classNames(style.headerContainer, className)}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}