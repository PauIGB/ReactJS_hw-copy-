import { GET_MESSAGES, ADD_MESSAGE } from '../actions';

export default function reducer(state = {messages: [], fetching: false }, action) {
    switch(action.type) {
        case `${GET_MESSAGES}_REQUEST`:
            return { ...state, fetching: true, };

        case GET_MESSAGES:
            return { ...state, messages: action.data, fetching: false, };
        
        case ADD_MESSAGE:
            const messages = [...state.messages, action.data];
            return { ...state, messages };

        default:
            return state;
    }
};