import recost from 'recost'
import logger from 'recost-logger'

import user, { initialState as userInitialState, IUserState } from './user'
import { tableReducer, initialState as tableInitialState, ITableState } from './table'

interface IState extends IUserState, ITableState {}

const initialState: IState = {
  ...userInitialState,
  ...tableInitialState,
}

const reducers = [
  user,
  tableReducer,
]

const middlewares = [
  logger,
]

export const { 
  Provider,
  dispatch,
  withState,
  useSelector,
} = recost<IState>(initialState, reducers, middlewares)