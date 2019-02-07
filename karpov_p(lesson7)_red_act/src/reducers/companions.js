import { handleAction } from 'redux-actions'

const defaultState = {
    companions: [],
};

const reducer = handleAction(
    'GET_COMPANIONS',
    (state, action) => ({...state, companions: action.payload }),
    defaultState
);

export default reducer;