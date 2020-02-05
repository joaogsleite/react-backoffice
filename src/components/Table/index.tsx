import React, { FC, memo } from 'react';

import TableHead from './TableHead';
import TableRow from './TableRow';

import style from './style.module.scss';

export interface ITableProps {
  columns?: Array<{ name: string, label?: string } | string>
}

const Table: FC<ITableProps> = ({ columns = [] }) => {
  const data = {
    id: 1,
    title: 'Example title',
    description: 'Description',
  };
  const actions = {
    edit: () => undefined,
    delete: () => undefined,
  };
  const fields = columns.map((column) => {
    return typeof column === 'string'
      ? column
      : column.name
  });

  return (
    <table className={style.table}>
      <TableHead actions={true} columns={columns} />
      <tbody>
        <TableRow
          actions={actions}
          fields={fields}
          data={data}
        />
      </tbody>
    </table>
  );
}

export default memo(Table);