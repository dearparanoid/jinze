import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import * as rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const initializeStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )

  for (let key in rootSagas) {
    sagaMiddleware.run(rootSagas[key]);
  }

  return store;
}

export default initializeStore;
