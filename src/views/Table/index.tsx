import React, { FC, memo } from 'react';

import Header from 'components/Header';
import style from './style.module.scss';
import { useParams } from 'react-router-dom';

export interface ITableProps {

};

const Table: FC<ITableProps> = () => {

  const { tableName = '' } = useParams()

  return (
    <div className={style.tableContainer}>
      <Header fixed title={`${tableName} table`} />
    </div>
  );
}

export default memo(Table);