import api, { API } from 'services/api';
import { dispatch } from 'reducers';
import HttpError from '../HttpError';
import { FETCH_TABLES_FULFILLED, FETCH_TABLES_PENDING } from 'reducers/table';

import './table.mock'

export interface ITable {
  name: string,
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
        throw new HttpError({ status: 403 })
      }
    })
  }
}

const table = new Table(api)
export default table
