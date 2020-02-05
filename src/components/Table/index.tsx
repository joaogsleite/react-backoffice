import React, { FC, memo } from 'react';

import TableHead from './TableHead';
import TableRow from './TableRow';

import style from './style.module.scss';

export interface ITableProps {
  
}

const Table: FC<ITableProps> = () => {
  const columns = [
    'id',
    'title',
    'description',
  ]
  const data = {
    id: 1,
    title: 'Example title',
    description: 'Description',
  }
  return (
    <table className={style.table}>
      <TableHead columns={columns} />
      <tbody>
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
        <TableRow columns={columns} data={data} />
      </tbody>
    </table>
  )
}

export default memo(Table);