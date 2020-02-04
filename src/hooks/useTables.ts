import { useEffect } from 'react'
import { useSelector } from "reducers"

import table from 'services/api/models/table'

export default function() {

  const tables = useSelector((state) => state.tables)
  const loading = useSelector((state) => state.loadingTables)

  useEffect(() => {
    if (tables.length === 0) {
      table.list()
    }
  }, [tables])

  return { tables, loading }
}