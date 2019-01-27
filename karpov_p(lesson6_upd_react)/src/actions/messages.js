import axios from 'axios';
import  { BASE_URL } from '../constants';
export const GET_MESSAGES  = 'GET_MESSAGES';
export const ADD_MESSAGE  = 'ADD_MESSAGE';

export function getMessages(id) {
    return dispatch => {
        dispatch({type: `${GET_MESSAGES}_REQUEST`, })
        return axios.get(`${BASE_URL}/posts/${id}/comments`)
            .then(({data}) => dispatch({
                type: GET_MESSAGES,
                data,
            }))
            .catch(error => console.error(error));
    }   
};

export function addMessage(id, text) {
    return axios.post(`${BASE_URL}/posts/${id}/comments`, {body: text, type: 'me',})
        .then(({data}) => ({ //убрал dispatch
            type: ADD_MESSAGE,
            data,
        }))
        .catch(error => console.error(error));     
};