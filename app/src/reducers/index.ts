import { combineReducers, Reducer } from 'redux';
import { client } from '../graphql/config';
import todos from './todos';
export interface IRootState {
  todos: TodoStoreState;
  apollo: any;
}

export default combineReducers<IRootState>({
  // apollo: client.reducer(),
  todos,
});
