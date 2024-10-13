import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

// Create store with logger middleware
let store = createStore(rootReducer, applyMiddleware(logger));

export default store;
