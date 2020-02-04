import { IAction, IBaseState } from "recost";
import { IUser } from "services/api/models/user";

export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

export interface IUserState extends IBaseState {
  user?: IUser;
};

export const initialState: IUserState = {
  user: undefined,
};

export default function(state: IUserState, action: IAction) {
  console.log('action user')
  switch(action.type) {
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}