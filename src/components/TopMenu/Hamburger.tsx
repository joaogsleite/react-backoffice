import React, { FC, useCallback, MouseEvent, memo } from 'react';
import style from './style.module.scss';

const Hamburger: FC = () => {

  const handleClick = useCallback((event: MouseEvent) => {

  }, [])

  return (
    <button
      className={style.hamburgerButton}
      aria-label='menu'
      aria-expanded='false'
      data-target='navbarBasicExample'
      onClick={handleClick}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  )
}

export default memo(Hamburger);