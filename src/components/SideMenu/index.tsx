import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import style from './style.module.scss';

import useTables from 'hooks/useTables';
import Message from 'components/Message';

export interface ISideMenuProps {};

const SideMenu: FC<ISideMenuProps> = () => {
  const { tables, loading } = useTables()
  return (
    <aside className={style.sideMenuContainer}>
      <p className={style.menuLabel}>
        Content Types
      </p>
      <ul className={style.menuList}>
        {loading
          ? <Message loading />
          : tables.map((table, index) => (
              <li key={index}>
                <NavLink to={`/table/${table.name}`} activeClassName={style.active}>
                  {table.layout.label}
                </NavLink>
              </li>
            ))
        }
      </ul>
    </aside>
  )
}

export default memo(SideMenu);