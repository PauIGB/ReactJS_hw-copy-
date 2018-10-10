import React, { PureComponent } from 'react';

import formsStore from 'stores/formsStore';
import generalStore from 'stores/generalStore';
import { linkClick, fromChangeHandler } from 'actions/formsActions';
import { fetchReqGen } from 'actions/generalActions';

import RegistrationForm from 'components/RegistrationForm';

export default class RegistrationFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isDisabled: 'disabled',                       
        };   
    }

    componentDidMount() {
        formsStore.on('inputTextChange', this.stateUpdater);
    }

    stateUpdater = (data) => {
        this.setState(data);
    }

    handleChange = (event) => {
        fromChangeHandler(event);   
    }
        
    reg = (evt) => {    
        evt.preventDefault();               
        const url = 'profile';
        const method = 'POST';
        const event = 'setUserName'
        const text = {"name": this.state.text};
        fetchReqGen({url, method, text, event });
        linkClick();         
    }

    componentWillUnmount() {
        formsStore.removeListener('inputTextChange', this.stateUpdater);       
    }

    render() {  
        const { isDisabled, text } = this.state;       
        return (  
            <RegistrationForm 
            isDisabled={isDisabled} 
            name_reg={text}
            onHandleChange={this.handleChange}         
            onReg={this.reg} />       
        );
    }
}