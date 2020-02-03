import React, { FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';

export interface ILayoutProps {
  children?: ReactNode;
  className?: string;
};

const Layout: FC<ILayoutProps> = ({ children, className = '' }) => {
  const layoutClasses = classNames({
    [style.layoutContainer]: true,
    [className]: className,
  });
  return children ? (
    <div className={layoutClasses}>
      {children}
    </div>
  ) : null;
}

export default memo(Layout);