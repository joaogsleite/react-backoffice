import api, { API } from 'services/api';
import { dispatch } from 'reducers';
import HttpError from '../HttpError';

import './user.mock'

export interface IUser {
  id?: number,
  name: string,
  username: string,
  password?: string,
};

class User {
  private api: API;
  
  constructor (api: API) {
    this.api = api;
  }

  me() {
    dispatch({ type : 'FETCH_USER_PENDING' });
    return this.api.get('/users/me').then((user: IUser) => {
      if (user && user.id) {
        dispatch({ 
          type: 'FETCH_USER_FULFILLED', 
          payload: user,
        });
        return user;
      } else {
        throw new HttpError({ status: 403 })
      }
    })
  }

  login(username: string, password: string) {
    const data = {
      username,
      password,
    }
    return this.api.post('/auth/local', data).then((user: IUser) => {
      if (user.id) {
        dispatch({ 
          type: 'FETCH_USER_FULFILLED', 
          payload: user,
        })
        return user
      } else {
        throw new HttpError({ status: 403 })
      }
    })
  }

  logout () {
    return this.api.get('/logout').then(() => {
      dispatch({ type:'LOGOUT' });
      return true
    })
  }
}

const user = new User(api)
export default user
