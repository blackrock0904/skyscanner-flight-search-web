import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();
const initialState = {isAuthenticated: false, flighs:[], date: new Date()};
export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
