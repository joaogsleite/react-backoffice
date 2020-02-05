import React, { FC, memo } from 'react';

import Header from 'components/Header';
import style from './style.module.scss';

export interface IHomeProps {

};

const Home: FC<IHomeProps> = () => {

  return (
    <div className={style.homeContainer}>
      <Header fixed title="Welcome" />
      <p>Please choose a table on the left menu to start</p>
      <p style={{marginTop: 1000}}>Bottom</p>
    </div>
  );
}

export default memo(Home);