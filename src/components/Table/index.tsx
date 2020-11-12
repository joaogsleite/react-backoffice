import React, { FC, memo } from 'react';

import TableHead from './TableHead';
import TableRow from './TableRow';

import style from './style.module.scss';
import { TTableData } from 'reducers/table';
import Message from 'components/Message';

export interface ITableProps {
  columns?: Array<{ name: string, label?: string } | string>
  tableData: TTableData[]
  loadingTableData: boolean
}

const Table: FC<ITableProps> = ({ columns = [], tableData, loadingTableData }) => {
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
        {(
          loadingTableData && (
            <tr>
              <td colSpan={columns.length}>
                <Message loading />
              </td>
            </tr>
          )
        ) || (
          !loadingTableData && (
            tableData.map(
              (data) => (
                <TableRow
                  actions={actions}
                  fields={fields}
                  data={data}
                />
              )
            )
          )
        )}
      </tbody>
    </table>
  );
}

export default memo(Table);