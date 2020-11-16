import React, { FC, memo } from "react";
import { Route } from "react-router-dom";
import TopMenu from "components/TopMenu";
import SideMenu from "components/SideMenu";
import "./styles.scss";

export interface ILayoutProps {
  children?: any[] | any;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <SideMenu />
      <div className="layout__main">
        <TopMenu />
        <div className="layout__children">{children}</div>
      </div>
    </div>
  );
};

export default memo((props: ILayoutProps) => {
  const path = Array.isArray(props.children)
    ? props.children.map((route: any) => route.props.path)
    : props.children.props.path;
  const render = () => <Layout {...props} />;
  return <Route exact path={path} render={render} />;
});
