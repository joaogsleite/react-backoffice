import { useEffect } from 'react'
import { useSelector } from 'reducers'

import tableService, { ITable, IColumn }  from 'services/api/models/table'
import { emptyTableConfig, emptyColumnConfig } from 'utils/tableConfig'

export class TableConfig {
  private config: ITable
  private fields: IColumn[]

  constructor(config?: ITable) {
    this.config = config || emptyTableConfig
    this.fields = this.config.columns || []
  }

  name() {
    return this.config.name
  }

  title() {
    return this.config.layout.label || this.config.name
  }

  columns() {
    return this.fields.map((column) => ({
      name: column.name,
      label: column.layout?.label || column.name,
    }))
  }

  pkColumn(): IColumn {
    return this.fields.find((c) => c.model && c.model.isPk) || emptyColumnConfig
  }

  titleColumn() {
    return this.fields.find((c) => c.layout && c.layout.isTitle) || emptyColumnConfig
  }

  itemPK(item: any) {
    const column = this.pkColumn()
    return Number(item[column.name])
  }

  itemTitle(item: any) {
    const column = this.titleColumn()
    return column && column.name
      ? item[column.name]
      : this.itemPK(item)
  }
}

let previousTableName = ''

export default function useTableData(tableName: string) {

  const tableData = useSelector((state) => {
    return state.tableData
  })

  const errorTableData = useSelector((state) => {
    return state.errorTableData
  })

  const loadingTableData = useSelector((state) => {
    return state.loadingTableData
  })

  const tableConfig = useSelector((state) => {
    return state.tables.find(
      (table) => table.name === tableName
    )
  })
  useEffect(() => {
    if ((!tableData || tableName !== previousTableName) && !loadingTableData && tableConfig) {
      previousTableName = tableName
      tableService.getTableData(tableConfig, {
        skip: 0,
        take: 10
      })
    }
  }, [tableData, loadingTableData, tableName, tableConfig])

  return { 
    tableData: tableData || [],
    loadingTableData,
    errorTableData,
  }
}