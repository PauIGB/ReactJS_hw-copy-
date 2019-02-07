import axios from 'axios';
import { createActions } from 'redux-actions';

import  { BASE_URL } from '../constants';
const { getUserReq, getUser } = createActions('GET_USER_REQ', 'GET_USER');

export const fetchUser = name => dispatch => {
    dispatch(getUserReq());
    return axios.post(`${BASE_URL}/profile`, { name })
    .then(({data}) => dispatch(getUser(data)))
    .catch(error => dispatch(getUser(new TypeError(error))))
}