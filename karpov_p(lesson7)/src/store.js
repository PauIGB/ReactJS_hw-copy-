import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import localStorage, {loadState} from './middleware/local-storage';

import reducer from './reducers';

const initialState = loadState();

const store = createStore(reducer, initialState, applyMiddleware(thunk, promise, localStorage(), logger));

export default store;