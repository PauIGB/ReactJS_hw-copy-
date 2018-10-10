import { EventEmitter } from 'events';
import { 
    AUTO_SCROLL,
} from 'constants/messageItemConstants';

import dispatcher from '../dispatcher';

class messageItemStore extends EventEmitter {
    autoScroll() {   
        const commArea = document.querySelector('.comment-area');
        commArea.scrollTo({
            top: commArea.scrollHeight,
            behavior: 'smooth'
        })
    }

    handleActions = (action) => {
        switch (action.type) {
            case AUTO_SCROLL: {
                this.autoScroll();
                break;
            }           
            default:
                break;
        }
    }
}

const mIS = new messageItemStore;
dispatcher.register(mIS.handleActions);
export default mIS;
