import dispatcher from '../dispatcher';
import { 
    AUTO_SCROLL,
 } from 'constants/messageItemConstants';

export const autoScroll = () => {
    dispatcher.dispatch({
        type: AUTO_SCROLL,   
    })
};