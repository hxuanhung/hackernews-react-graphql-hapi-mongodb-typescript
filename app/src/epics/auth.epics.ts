import { Observable } from 'rxjs/Observable';

import * as types from '../constants/actions';
import {
  login as loginService,
  logout as logoutService,
} from '../services/auth.service';
import { GITHUB_ACCESS_TOKEN } from '../constants/config';
export const loginEpic = (action$) =>
  action$.ofType(types.login).switchMap(() =>
    loginService()
      .map((result) => {
        const token = result.credential.accessToken;
        localStorage.setItem(GITHUB_ACCESS_TOKEN, token);
        return {
          payload: result,
          type: types.loginCompleted,
        };
      })
      .catch((err: any, caught: Observable<any>) => {
        console.log(`error`, err);
        return Observable.of({
          payload: err,
          type: types.loginFailed,
        });
      }),
  );

export const logoutEpic = (action$) =>
  action$.ofType(types.logout).switchMap(() =>
    logoutService()
      .map((result) => {
        return {
          payload: result,
          type: types.logoutCompleted,
        };
      })
      .catch((err: any, caught: Observable<any>) => {
        return Observable.of({
          payload: err,
          type: types.logoutFailed,
        });
      }),
  );
