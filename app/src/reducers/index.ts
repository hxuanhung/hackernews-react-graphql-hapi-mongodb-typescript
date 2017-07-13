import { combineReducers, Reducer } from 'redux';
import { client } from '../graphql/config';
export interface IRootState {
  apollo: any;
}

export default combineReducers<IRootState>({
  apollo: client.reducer(),
});
