import { combineReducers } from 'redux';

import user from './user';
import companions from './companions';
import messages from './messages';

const reducer = combineReducers({
    user,
    companions,
    messages,
});

export default reducer;