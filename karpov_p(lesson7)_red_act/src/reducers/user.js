import { handleActions } from 'redux-actions';

const defaultState = {
    name: '', 
    loading: false,
    error: false,
    errorMessage: '',
};

const reducer = handleActions({   
    GET_USER_REQUEST: (state) => ({ ...state,  loading: true }), 
    GET_USER: {
        next: (state, { payload: { name } }) => ({ ...state,  name, loading: false }),
        throw: (state, { payload: { message }, error }) => ({ name: '', loading: false, error: error, errorMessage: message }), 
    }    
}, defaultState);

export default reducer;