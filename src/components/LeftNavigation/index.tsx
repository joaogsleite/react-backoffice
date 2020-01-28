import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { dispatch, useSelector } from 'recost'
import classNames from 'classnames'

import { ITableConfig, isVisibleInSideMenu } from 'utils/tableConfig'

import style from './style.module.scss'

export interface ISideMenuProps {
  tables: ITableConfig[],
}

function SideMenu ({ tables } : ISideMenuProps) {
  
  const sideMenuOpen = useSelector((state: any): boolean => state.sideMenuOpen)

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      event.stopPropagation()
      if (sideMenuOpen) {
        dispatch({ type: 'CLOSE_SIDE_MENU' })
      }
    }
    window.addEventListener('click', closeMenu)
    return () => {
      window.removeEventListener('click', closeMenu)
    }
  }, [sideMenuOpen])
  
  const menuClasses = classNames({
    menu: true,
    [style.navigation]: true,
    [style.closed]: !sideMenuOpen,
  })

  return (
    <aside className={menuClasses}>
      <p className="menu-label">
        Content Types
      </p>
      <ul className="menu-list">
        {tables.filter(isVisibleInSideMenu).map((table, index) => (
          <li key={index}>
            <NavLink to={`/table/${table.name}`} activeClassName='is-active'>
              {table.layout.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default memo(SideMenu)
