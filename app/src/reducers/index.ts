import { combineReducers, Reducer } from 'redux';
import { client } from '../graphql/config';
import todos from './todos';
import { auth, IAuthReducer } from '../reducers/auth.reducer';
export interface IRootState {
  todos: TodoStoreState;
  // apollo: any;
  auth: IAuthReducer;
}

export default combineReducers<IRootState>({
  todos,
  auth,
});
