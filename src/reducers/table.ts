import { IAction, IBaseState } from "recost";
import { ITable } from "services/api/models/table";

export const FETCH_TABLES_PENDING = 'FETCH_TABLES_PENDING';
export const FETCH_TABLES_FULFILLED = 'FETCH_TABLES_FULFILLED';
export const FETCH_TABLES_REJECTED = 'FETCH_TABLES_REJECTED';
export const FETCH_TABLE_PENDING = 'FETCH_TABLE_PENDING';
export const FETCH_TABLE_FULFILLED = 'FETCH_TABLE_FULFILLED';
export const FETCH_TABLE_REJECTED = 'FETCH_TABLE_REJECTED';

export interface ITableState extends IBaseState {
  tables: ITable[];
  loadingTables: boolean;
  error?: boolean,
};

export const initialState: ITableState = {
  tables: [],
  loadingTables: false,
  error: false,
};

export default function(state: ITableState, action: IAction) {
  let tables = state.tables || []
  switch(action.type) {
    case FETCH_TABLES_PENDING:
      return {
        ...state,
        loadingTables: true,
      }
    
    case FETCH_TABLE_PENDING:
      tables = tables.map((table: ITable) => ({
        ...table,
        loading: table.name === action.payload
          ? true
          : table.loading,
      }))
      return {
        ...state,
        loadingTables: tables.length === 0,
        tables,
      }

    case FETCH_TABLES_FULFILLED:
      (action.payload || []).forEach((table: ITable) => {
        if (!tables.find((t: ITable) => t.name === table.name)) {
          tables.push(table)
        }
      })
      return {
        ...state,
        loadingTables: false,
        tables,
      }

    case FETCH_TABLE_FULFILLED:
      if (tables.length === 0) {
        tables = [action.payload]
      } else {
        tables = tables.map((table: ITable) => {
          return table.name === action.payload.name
            ? { ...table, loading: false, ...action.payload }
            : { ...table, loading: false }
        })
      }
      return {
        ...state,
        tables,
      }

    case FETCH_TABLE_REJECTED:
    case FETCH_TABLES_REJECTED:
      return {
        ...state,
        loadingTables: false,
        error: true,
      }

    default:
      return state
  }
}