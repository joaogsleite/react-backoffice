import recost from 'recost'
import logger from 'recost-logger'

import user, { IUserState } from './user'

interface IState extends IUserState {};

const initialState: IState = {
  user: undefined,
}

const reducers = [
  user,
]

const middlewares = [
  logger,
]

export const { 
  Provider,
  dispatch,
  withState,
  useSelector,
} = recost(initialState, reducers, middlewares)