import React, { PureComponent } from 'react';

import { postMessage } from '../actions';
import CommentForm from 'components/CommentForm';

export default class CommentFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '', 
            isDisabled: 'disabled',
        };   
    };
  
    addComment = event => {            
        event.preventDefault(); 
        postMessage(this.props.id, this.state.text)
        .then(() => this.setState({
            text: '',
            isDisabled: "disabled",
        })); 
    };
        
    handleChange = event => {        
        this.setState({ [event.target.name]: event.target.value, });
        (event.target.value) ? this.setState({ isDisabled: false, }) : this.setState({ isDisabled: 'disabled', });              
    };

    render() {
        const{ text, isDisabled } = this.state;

        return (  
            <CommentForm 
                text={text} 
                isDisabled={isDisabled} 
                onHandleChange={this.handleChange} 
                onAddComment={this.addComment}
            />       
        );
    };
};