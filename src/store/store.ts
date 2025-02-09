import reducer from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import {thunk } from 'redux-thunk';

const composeEnhancers = (typeof window!=='undefined' &&
     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Combinar middleware
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;