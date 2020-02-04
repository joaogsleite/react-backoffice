import React, { FC, memo, useState } from 'react';
import style from './style.module.scss';
import Toast from 'components/Toast';

export interface IHomeProps {

};

const Home: FC<IHomeProps> = () => {

  const [visible, setVisible] = useState(true);

  return (
    <div className={style.homeContainer}>
      Home view
      <Toast warning={true} visible={visible} onDismiss={() => setVisible(false)}>
        Toast body
      </Toast>
    </div>
  );
}

export default memo(Home);