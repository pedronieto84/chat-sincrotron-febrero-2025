import reducer from './reducers';
import { createStore } from 'redux';

const store = createStore(
    reducer, 
    window.__REDUXDEVTOOLS_EXTENSION__ && window.__REDUXDEVTOOLS_EXTENSION__());

export default store;