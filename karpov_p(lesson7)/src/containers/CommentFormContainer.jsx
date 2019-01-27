import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addMessage } from '../actions';

import CommentForm from 'components/CommentForm';

class CommentFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '', 
            isDisabled: 'disabled',
        };   
    }
  
    addComment = event => {            
        event.preventDefault(); 
        const { id, onAddMessage } = this.props;
        onAddMessage(id, this.state.text)
        .then(() => this.setState({
            text: '',
            isDisabled: "disabled",
        })); 
    } 
        
    handleChange = event => {        
        this.setState({ [event.target.name]: event.target.value, });
        (event.target.value) ? this.setState({ isDisabled: false, }) : this.setState({ isDisabled: 'disabled', });              
    }

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
    }
};

function mapDispatchToProps(dispatch) {
    return {    
        onAddMessage: (id, text) => dispatch(addMessage(id, text)),
    };
};

export default connect(null, mapDispatchToProps)(CommentFormContainer);