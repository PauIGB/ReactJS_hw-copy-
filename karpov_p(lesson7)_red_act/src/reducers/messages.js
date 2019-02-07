import { handleActions } from 'redux-actions';

const defaultState = {
    messages: [],
};

const reducer = handleActions({
    GET_MESSAGES: (state, { payload }) => ({ ...state, messages: payload }),
    ADD_MESSAGE: (state, { payload }) => ({ ...state, messages: [...state.messages, payload] }),
}, defaultState)

export default reducer;