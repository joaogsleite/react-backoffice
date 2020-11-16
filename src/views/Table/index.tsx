import React, { FC, memo } from "react";
import { useParams } from "react-router-dom";

import Title from "components/Title";
import Table from "components/Table";

import useTableConfig from "hooks/useTableConfig";
import Message from "components/Message";
import useTableData from "hooks/useTableData";
import useEntryData from "hooks/useEntryData";
import "./styles.scss";

export interface ITableProps {}

const TableView: FC<ITableProps> = () => {
  const { tableName = "" } = useParams<any>();

  const { table, loadingTableConfig } = useTableConfig(tableName);
  const { tableData, loadingTableData, errorTableData } = useTableData(
    tableName
  );
  console.log(useEntryData(tableName, { id: tableData[0]?.id }));

  return (
    <div className="table__container">
      <Title fixed>{table.title()}</Title>
      {!errorTableData &&
        (loadingTableConfig ? (
          <Message loading />
        ) : (
          table &&
          tableData && (
            <Table
              tableData={tableData}
              loadingTableData={loadingTableData}
              columns={table.columns()}
            />
          )
        ))}
      {errorTableData && (
        <Message error={!!errorTableData} text={errorTableData} />
      )}
    </div>
  );
};

export default memo(TableView);
