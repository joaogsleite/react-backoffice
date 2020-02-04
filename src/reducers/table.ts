import { IAction, IBaseState } from "recost";
import { ITable } from "services/api/models/table";

export const FETCH_TABLES_PENDING = 'FETCH_TABLES_PENDING';
export const FETCH_TABLES_FULFILLED = 'FETCH_TABLES_FULFILLED';
export const FETCH_TABLES_REJECTED = 'FETCH_TABLES_REJECTED';
export const FETCH_TABLE_FULFILLED = 'FETCH_TABLE_FULFILLED';

export interface ITableState extends IBaseState {
  tables: ITable[];
  loadingTables: boolean;
};

export const initialState: ITableState = {
  tables: [],
  loadingTables: true,
};

export default function(state: ITableState, action: IAction) {
  let tables = state.tables || []
  switch(action.type) {
    case FETCH_TABLES_PENDING:
      return {
        ...state,
        loadingTables: true,
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
    case FETCH_TABLES_REJECTED:
      return {
        ...state,
        loadingTables: false,
        tables: [],
        error: true,
      }
    default:
      return state
  }
}