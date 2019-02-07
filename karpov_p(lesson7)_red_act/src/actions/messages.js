import io from 'socket.io-client';
import axios from 'axios';
import { createActions } from 'redux-actions';

import  { BASE_URL } from '../constants';

const { getMessages, addMessage } = createActions('GET_MESSAGES', 'ADD_MESSAGE')

const socket = io.connect('http://localhost:3000');

export const eventSubscriber = dispatch => {
    socket.on('message', message => dispatch(addMessage(message)));
};

const addHandler = message => {
    socket.emit('message', message);
};

export const postMessage = (id, text) => {
    return axios.post(`${BASE_URL}/companions/${id}/messages`, {body: text, type: 'me',})
        .then(({data}) => addHandler(data))
        .catch(error => console.error(new TypeError(error)));     
};

export const fetchMessages = id => {    
    return axios.get(`${BASE_URL}/companions/${id}/messages`)
        .then(({data}) => getMessages(data))
        .catch(error => console.error(error));      
};