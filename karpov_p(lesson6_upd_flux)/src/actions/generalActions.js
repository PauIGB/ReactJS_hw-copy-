import dispatcher from '../dispatcher';
import { 
    FETCH_REQ_GEN,
 } from 'constants/generalConstants';

export const fetchReqGen = ({url, method='GET', text, event}) => {
    const data = { url, method, text, event } ;
    dispatcher.dispatch({
        type: FETCH_REQ_GEN,
        payload: data,
    })
};