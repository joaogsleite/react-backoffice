import React, { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import Title from 'components/Title';
import Table from 'components/Table';

import style from './style.module.scss';
import useTableConfig from 'hooks/useTableConfig';
import Message from 'components/Message';

export interface ITableProps {

};

const TableView: FC<ITableProps> = () => {

  const { tableName = '' } = useParams()

  const { table, loading } = useTableConfig(tableName)

  return (
    <div className={style.tableContainer}>
      <Title fixed>{table.title()}</Title>
      {loading
        ? <Message loading />
        : table && <Table columns={table.columns()} />
      }
    </div>
  );
}

export default memo(TableView);