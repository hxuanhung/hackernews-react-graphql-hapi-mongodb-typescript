import * as types from '../constants/actions';

export interface IAuthReducer {
  currentUser: {
    login: string;
  };
  error: any;
}
const initialState: IAuthReducer = {
  currentUser: null,
  error: null,
};

export const auth = (state = initialState, action): IAuthReducer => {
  const payload = action.payload;
  switch (action.type) {
    case types.loginCompleted:
      console.log(`login`, payload);
      return {
        currentUser: {
          login: payload.user.email,
        },
        error: null,
      };

    case types.loginFailed:
      return {
        ...state,
        error: payload,
      };

    case types.logoutCompleted:
      return initialState;

    case types.logoutFailed:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
