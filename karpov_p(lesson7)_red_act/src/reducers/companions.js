import { GET_COMPANIONS } from '../actions';

export default function reducer(state = {companions: [], fetching: false }, action) {
    switch(action.type) {
        case `${GET_COMPANIONS}_REQUEST`:
            return { ...state, fetching: true, };

        case GET_COMPANIONS:
            return { ...state, companions: action.data, fetching: false, };

        default:
            return state;
    }
}