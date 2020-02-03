import React, { FC, memo } from 'react';
import style from './style.module.scss';

export interface IHomeProps {

};

const Home: FC<IHomeProps> = () => {
  return (
    <div className={style.homeContainer}>
      Home view
    </div>
  );
}

export default memo(Home);