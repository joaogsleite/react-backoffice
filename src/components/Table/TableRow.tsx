import React, { FC, memo } from 'react'
import ActionButton, { IActionFunction, EActionType } from './ActionButton';

export interface ITableRowProps {
  columns: string[];
  data: any;
  actions?: {
    [key in EActionType]: IActionFunction;
  };
};

const TableRow: FC<ITableRowProps> = ({ columns, data, actions = {} }) => {
  return (
    <tr>
      {columns.map((column) => (
        <td>{data[column]}</td>
      ))}
      {actions && (
        <td>
          {(Object.keys(actions) as Array<EActionType>).map((type) => (
            <ActionButton
              data={data}
              type={type}
              onClick={actions[type]}
            />
          ))}
        </td>
      )}
    </tr>
  )
}

export default memo(TableRow);