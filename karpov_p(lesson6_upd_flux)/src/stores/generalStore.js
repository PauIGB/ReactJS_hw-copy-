import { EventEmitter } from 'events';
import { 
    BASE_URL,
    FETCH_REQ_GEN,
} from 'constants/generalConstants';

import dispatcher from '../dispatcher';

class generalStore extends EventEmitter {

    fetchReqGen = (data) => {     
        const { url, method, text, event } = data;     
        fetch(`${BASE_URL}/${url}`, {
            method: method,
            body: JSON.stringify(text) || null,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())      
        .then(json => {
            this.emit(event, json)}
        )
    }

    handleActions = (action) => {
        switch (action.type) {
            case FETCH_REQ_GEN: {
                this.fetchReqGen(action.payload);
                break;
            }
            default:
                break;
        }
    }
}

const genStore = new generalStore;
dispatcher.register(genStore.handleActions);
export default genStore;
