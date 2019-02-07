import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import localStorage, {loadState} from './middleware/local-storage';

import reducer from './reducers';
const initialState = loadState('user');

const store = createStore(reducer, initialState, applyMiddleware(promise, thunk, localStorage('user', 'name'), logger));

export default store;