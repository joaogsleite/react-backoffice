import React, { FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import Title from 'components/Title'
import Table from 'components/Table'

import style from './style.module.scss'
import useTableConfig from 'hooks/useTableConfig'
import Message from 'components/Message'
import useTableData from 'hooks/useTableData'

export interface ITableProps {

}

const TableView: FC<ITableProps> = () => {

  const { tableName = '' } = useParams<any>()
  
  const { table, loadingTableConfig } = useTableConfig(tableName)
  const { tableData, loadingTableData, errorTableData } = useTableData(tableName)
  console.log('loadingTableData', loadingTableData)
  console.log('loadingTableConfig', loadingTableConfig)
  return (
    <div className={style.tableContainer}>
      <Title fixed>{table.title()}</Title>
      {!errorTableData &&
      (
        loadingTableConfig
          ? <Message loading/>
          : table && tableData && <Table
            tableData={tableData}
            loadingTableData={loadingTableData}
            columns={table.columns()}
          />
      )
      }
      {errorTableData && (
        <Message error={!!errorTableData} text={errorTableData}/>
      )}
    </div>
  )
}

export default memo(TableView)