import React, { FC, memo } from 'react';

import Title from 'components/Title';
import style from './style.module.scss';
import Button from 'components/Button';

export interface IHomeProps {

};

const Home: FC<IHomeProps> = () => {

  return (
    <div className={style.homeContainer}>
      <Title fixed>Welcome</Title>
      <p>Please choose a table on the left menu to start</p>
      <Button
        icon='exclamation'
        color='warning'
        text='Warning'
        onClick={() => undefined} 
      />
      <p style={{marginTop: 1000}}>Bottom</p>
    </div>
  );
}

export default memo(Home);