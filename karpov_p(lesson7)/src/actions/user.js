import axios from 'axios';
import  { BASE_URL } from '../constants';
export const GET_USER  = 'GET_USER';

export function getUser(name) {
    return dispatch => {
        dispatch({type: `${GET_USER}_REQUEST`, })
        return axios.post(`${BASE_URL}/profile`, { name })
            .then(({data}) => dispatch({
                type: GET_USER,
                data,
            }))
            .catch(error => console.error(error))
    }   
};