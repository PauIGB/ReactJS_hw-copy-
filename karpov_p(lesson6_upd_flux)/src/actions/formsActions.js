import dispatcher from '../dispatcher';
import { 
    LINK_CLICK,
    FORM_CHANGE_HANDLER,
 } from 'constants/formsConstants';

export const linkClick = () => {
    dispatcher.dispatch({
        type: LINK_CLICK,   
    })
};

export const fromChangeHandler = (event) => {    
    dispatcher.dispatch({
        type: FORM_CHANGE_HANDLER,
        payload: event,
    })
};