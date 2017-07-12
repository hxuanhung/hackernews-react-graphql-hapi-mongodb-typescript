import { createAction } from 'redux-actions';
import * as types from '../constants/actions';

export const login = createAction(types.login);
export const loginCompleted = createAction(types.loginCompleted);
export const loginFailed = createAction(types.loginFailed);

export const logout = createAction(types.logout);
export const logoutCompleted = createAction(types.logoutCompleted);
export const logoutFailed = createAction(types.logoutFailed);
