import { handleActions } from 'redux-actions';


const defaultState = {
    name: '', 
    loading: false,
};

const reducer = handleActions({   
    GET_USER_REQUEST: (state) => ({ ...state,  loading: true }), 
    GET_USER: {
        next: (state, { payload: { name } }) => ({ ...state,  name, loading: false }),
        throw: (state, { payload: { message } }) => ({ name: '', loading: false, error: message }), 
    }    
}, defaultState);


export default reducer;