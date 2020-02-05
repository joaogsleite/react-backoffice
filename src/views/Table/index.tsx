import React, { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import Title from 'components/Title';
import Table from 'components/Table';

import style from './style.module.scss';

export interface ITableProps {

};

const TableView: FC<ITableProps> = () => {

  const { tableName = '' } = useParams()

  return (
    <div className={style.tableContainer}>
      <Title fixed>{`${tableName} table`}</Title>
      <Table />
    </div>
  );
}

export default memo(TableView);