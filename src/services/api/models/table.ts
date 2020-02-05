import api, { API } from 'services/api';
import { dispatch } from 'reducers';
import HttpError from '../HttpError';
import { FETCH_TABLES_FULFILLED, FETCH_TABLES_PENDING, FETCH_TABLE_PENDING, FETCH_TABLE_FULFILLED, FETCH_TABLE_REJECTED, FETCH_TABLES_REJECTED } from 'reducers/table';

import './table.mock'

export interface IColumn {
  name: string,
  layout: {
    label: string,
  }
}

export interface ITable {
  loading?: boolean,
  name: string,
  columns?: IColumn[],
  layout: {
    label: string,
  },
};

class Table {
  private api: API;
  
  constructor (api: API) {
    this.api = api;
  }

  list() {
    dispatch({ type : FETCH_TABLES_PENDING });
    return this.api.get('/tables').then((tables: ITable[]) => {
      if (tables) {
        dispatch({ 
          type: FETCH_TABLES_FULFILLED, 
          payload: tables,
        });
        return tables;
      } else {
        throw new HttpError({ status: 500 })
      }
    }).catch((error) => {
      dispatch({ type: FETCH_TABLES_REJECTED })
      throw error
    })
  }

  config(tableName: string) {
    dispatch({ type: FETCH_TABLE_PENDING, payload: tableName });
    return this.api.get(`/tables/${tableName}`).then((table: ITable) => {
      if (table) {
        dispatch({
          type: FETCH_TABLE_FULFILLED,
          payload: table,
        });
        return table;
      } else {
        throw new HttpError({ status: 404 });
      }
    }).catch((error) => {
      dispatch({ type: FETCH_TABLE_REJECTED })
      throw error
    })
  }
}

const table = new Table(api)
export default table
