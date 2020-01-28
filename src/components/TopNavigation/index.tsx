import React, { useEffect, useState, MouseEvent } from 'react'
import classNames from 'classnames'
import { translate } from 'react-multi-lang'
import { dispatch, useSelector } from 'recost'
import { Link } from 'react-router-dom'

import style from './style.module.scss'

function TopNavigation ({ t }) {

  const sideMenuOpen = useSelector((state: any): boolean => state.sideMenuOpen)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  const triggerSideMenu = (event: MouseEvent) => {
    event.stopPropagation()
    dispatch({ type: `${sideMenuOpen ? 'OPEN' : 'CLOSE'}_SIDE_MENU` })
  }

  const openDropdown = (event: MouseEvent) => {
    event.stopPropagation()
    setDropdownOpen((value) => !value)
  }

  useEffect(() => {
    const closeDropdown = () => {
      setDropdownOpen(false)
    }
    window.addEventListener('click', closeDropdown)
    return () => {
      window.removeEventListener('click', closeDropdown) 
    }
  }, [setDropdownOpen])

  const dropdownClasses = classNames({
    'dropdown': true,
    'is-right': true,
    'is-active': dropdownOpen,
  })

  return (
    <nav className={style.navigation} role="navigation" aria-label="main navigation">
      <div className={style.navbarBrand}>
        <button className={style.burgerIcon} onClick={triggerSideMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <Link to='/' className={style.navbarLogo}>
          <img src='' className={style.img} alt='logo' width="55"/>
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className={dropdownClasses}>
              <div className="dropdown-trigger" onClick={openDropdown}>
                <button className="button" aria-haspopup="true" aria-controls="logout-menu">
                  <span>Current User</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <button className={style.dropdownButton}>
                    {t('common.logout')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>      
  )
}

export default translate(TopNavigation)
