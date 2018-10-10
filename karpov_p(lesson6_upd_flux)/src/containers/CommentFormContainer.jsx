import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import dispatcher from '../dispatcher';
import generalStore from 'stores/generalStore';
import formsStore from 'stores/formsStore';
import { fromChangeHandler } from 'actions/formsActions';
import { fetchReqGen } from 'actions/generalActions';

import CommentForm from 'components/CommentForm';

class CommentFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '', 
            isDisabled: 'disabled',
        };        
        this.event = 'addComment';
    }

    stateUpdater = (data) => {
        this.setState(data)      
    }

    componentDidMount() {
        formsStore.on('inputTextChange', this.stateUpdater);
    }
  
    addComment = (evt) => {            
        evt.preventDefault(); 
        const {
            match: {
              params: { id }
            }
        } = this.props;
       
        const url = `posts/${id}/comments`;
        const method = 'POST';
            const event = this.event;
        const text = { 
            body: this.state.text,
            type: 'me', 
        };
        fetchReqGen({url, method, text, event});

        this.setState({
            text: '',
            isDisabled: "disabled",
        })
   }         

    handleChange = (event) => {
        fromChangeHandler(event);        
    }

    render() {
        const{ text, isDisabled } = this.state;

        return (  
            <CommentForm 
            onHandleChange={this.handleChange} 
            onAddComment={this.addComment} 
            text={text} 
            isDisabled={isDisabled} />       
        );
    }
}

export default withRouter(CommentFormContainer);