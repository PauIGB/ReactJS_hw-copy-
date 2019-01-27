import { GET_USER } from '../actions';

export default function reducer(state = {name: '', fetching: false }, action) {
    switch(action.type) {
        case `${GET_USER}_REQUEST`:
            return { ...state, fetching: true };

        case GET_USER:
            return { ...state, name: action.data.name, fetching: false, };

        default:
            return state;
    }
}