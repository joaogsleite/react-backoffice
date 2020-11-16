import React, { FC, memo } from "react";
import { TEntry } from "reducers/entry";
import ActionButton, { IActionFunction, EActionType } from "../ActionButton";
import "./styles.scss";

export interface ITableRowProps {
  fields: string[];
  data: TEntry;
  actions?: {
    [key in EActionType]?: IActionFunction;
  };
}

const TableRow: FC<ITableRowProps> = ({ fields, data, actions }) => {
  return (
    <tr className="table-row">
      {fields.map((field, index) => (
        <td key={index}>{data[field]}</td>
      ))}
      {actions && (
        <td className="table-row__actions">
          {(Object.keys(actions) as Array<EActionType>).map((type, index) => (
            <ActionButton
              key={index}
              data={data}
              type={type}
              onClick={actions[type]}
            />
          ))}
        </td>
      )}
    </tr>
  );
};

export default memo(TableRow);
