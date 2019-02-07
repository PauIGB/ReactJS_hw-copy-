import io from 'socket.io-client';
import axios from 'axios';

import  { BASE_URL } from '../constants';
export const GET_MESSAGES  = 'GET_MESSAGES';
export const ADD_MESSAGE  = 'ADD_MESSAGE';

const socket = io.connect('http://localhost:3000');

function addProceedAction(message) {
    return {
        type: ADD_MESSAGE,
        message,
    };
};

export function eventSubscriber(dispatch) {
    socket.on('message', message => dispatch(addProceedAction(message)));
};

function addHandler(message) {
    socket.emit('message', message);
};

export function addMessage(id, text) {
    return axios.post(`${BASE_URL}/companions/${id}/messages`, {body: text, type: 'me',})
        .then(({data}) => addHandler(data))
        .catch(error => console.error(error));     
};

export function getMessages(id) {
    return dispatch => {
        dispatch({type: `${GET_MESSAGES}_REQUEST`, })
        return axios.get(`${BASE_URL}/companions/${id}/messages`)
            .then(({data}) => dispatch({
                type: GET_MESSAGES,
                data,
            }))
            .catch(error => console.error(error));
    }   
};