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
    if (column && column.name) {
      return item[column.name]
    } else {
      return this.itemPK(item)
    }
  }
}

export default function(tableName: string) {

  const table = useSelector((state) => {
    return state.tables.find((t) => {
      return t.name === tableName
    })
  })

  const loading = useSelector((state) => state.loadingTables)

  useEffect(() => {
    if (!table || (!table.loading && !table.columns)) {
      tableService.config(tableName)
    }
  }, [table, tableName])

  return { 
    table: new TableConfig(table),
    loading: loading || !table || table.loading,
  }
}