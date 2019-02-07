import axios from 'axios';
import  { BASE_URL } from '../constants';
export const GET_COMPANIONS  = 'GET_COMPANIONS';

export function getCompanions() {
    return dispatch => {
        dispatch({type: `${GET_COMPANIONS}_REQUEST`, })
        return axios.get(`${BASE_URL}/companions`)
            .then(({data}) => dispatch({
                type: GET_COMPANIONS,
                data,
            }))
            .catch(error => console.error(error))
    };  
};