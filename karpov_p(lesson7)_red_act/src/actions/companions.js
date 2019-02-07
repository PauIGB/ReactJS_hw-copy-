
import axios from 'axios';
import { createAction } from 'redux-actions';
import  { BASE_URL } from '../constants';

export const getCompanions = createAction('GET_COMPANIONS');
export const fetchCompanions = () => {
    return axios.get(`${BASE_URL}/companions`)
    .then(({data}) => getCompanions(data))
    .catch(error => console.error(new TypeError(error)));
};