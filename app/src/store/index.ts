import { applyMiddleware, createStore, Store } from 'redux';
import { logger } from '../middleware';
import rootReducer, { IRootState } from '../reducers';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);
if (module.hot) {
  module.hot.accept('./rootEpic', () => {
    const nextEpic = require('./rootEpic');
    epicMiddleware.replaceEpic(nextEpic);
  });
}
export function configureStore(initialState?: IRootState): Store<IRootState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<IRootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
