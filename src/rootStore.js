import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [];
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }
  middleware.push(sagaMiddleware);
  return {
    store: createStore(rootReducer, initialState, applyMiddleware(...middleware)),
    runSaga: sagaMiddleware.run,
  };
}
