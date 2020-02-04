import React, { FC, memo } from 'react';

import Header from 'components/Header';
import style from './style.module.scss';

export interface IHomeProps {

};

const Home: FC<IHomeProps> = () => {

  return (
    <div className={style.homeContainer}>
      <Header title="Home view" />
    </div>
  );
}

export default memo(Home);