import { useEffect } from 'react'
import { useSelector } from "reducers"

import tableService from 'services/api/models/table'

export default function(tableName: string) {

  const table = useSelector((state) => {
    return state.tables.find((t) => {
      return t.name === tableName
    })
  })
  console.log('table', table)

  const loading = useSelector((state) => state.loadingTables)

  useEffect(() => {
    if (!table || !table.columns) {
      tableService.config(tableName)
    }
  }, [table, tableName])

  return { 
    table: table,
    loading: loading || !table || table.loading,
  }
}