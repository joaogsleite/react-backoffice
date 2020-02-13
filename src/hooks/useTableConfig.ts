import { useEffect } from 'react'
import { useSelector } from "reducers"

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

export default function(tableName: string) {

  const table = useSelector((state) => {
    return state.tables.find((t) => {
      return t.name === tableName
    })
  })

  const loadingTables = useSelector((state) => {
    return state.loadingTables
  })

  const loading = loadingTables || !table || table.loading

  useEffect(() => {
    if (!table?.columns && !loading) {
      tableService.config(tableName)
    }
  }, [table, loading, tableName])

  return { 
    table: new TableConfig(table),
    loading,
  }
}