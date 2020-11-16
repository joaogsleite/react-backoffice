import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import useTables from "hooks/useTables";
import Hamburger from "./components/Hamburger";
import Logo from "./components/Logo";
import "./styles.scss";

export interface ISideMenuProps {}

const SideMenu: FC<ISideMenuProps> = () => {
  const { tables, loading } = useTables();
  return (
    <>
      <Hamburger />
      <Logo />
      <aside className="sideMenu__space"></aside>
      <aside className="sideMenu">
        <p className="sideMenu__menuLabel">Content Types</p>
        <ul className="sideMenu__menuList">
          {loading ? (
            <p>Loading...</p>
          ) : (
            tables.map((table, index) => (
              <NavLink
                key={index}
                to={`/table/${table.name}`}
                activeClassName="sideMenu__active"
              >
                {table.layout.label}
              </NavLink>
            ))
          )}
        </ul>
      </aside>
    </>
  );
};

export default memo(SideMenu);
