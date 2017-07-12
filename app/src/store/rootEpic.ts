import { combineEpics } from 'redux-observable';
import * as authEpics from '../epics/auth.epics';

const rootEpic = combineEpics(
  authEpics.loginEpic,
  authEpics.logoutEpic,
);

export default rootEpic;
