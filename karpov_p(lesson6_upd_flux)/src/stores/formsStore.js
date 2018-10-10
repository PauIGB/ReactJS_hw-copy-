import { EventEmitter } from 'events';
import { 
    LINK_CLICK,
    FORM_CHANGE_HANDLER,
} from 'constants/formsConstants';

import dispatcher from '../dispatcher';

class formsStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.data = {
            isDisabled: 'disabled',
            text: '',
        }
    }    

    clickLink() {   
        const link = document.getElementById('reg-link');
        link.click();
    }

    onChangeUpdater = (event) => {
        this.data[event.target.name] = event.target.value;
    }

    disBtn = (event) => {
        (event.target.value !== "" ) ? this.data.isDisabled = false : this.data.isDisabled = 'disabled';
        this.change();
    }    

    formChangeHandler = (event) => {
        this.onChangeUpdater(event);
        this.disBtn(event);
        this.change();
    }
    
    change = () => {
        this.emit('inputTextChange', this.data); 
    }

    handleActions = (action) => {
        switch (action.type) {
            case LINK_CLICK: {
                this.clickLink();
                break;
            }
            case FORM_CHANGE_HANDLER:{
                this.formChangeHandler(action.payload);
                break;
            }            
            default:
                break;
        }
    }
}

const fS = new formsStore;
dispatcher.register(fS.handleActions);
export default fS;
