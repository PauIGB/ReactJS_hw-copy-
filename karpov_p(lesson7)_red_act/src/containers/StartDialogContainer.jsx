import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions';

import CommentArea from 'containers/CommentAreaContainer';
import CommentForm from 'containers/CommentFormContainer';

class StartDialogContainer extends PureComponent {
    componentDidMount() {
        const { match, onGetMessages } = this.props;
        onGetMessages(match.params.id);  
    } 

    componentDidUpdate(prevProps) {
        const { match: { params: { id } }, onGetMessages } = this.props;
        const prevId = prevProps.match.params.id;
        if (prevId !== id) {
            onGetMessages(id);
        };
    }

    render() {
        const { match: { params: { id } }, messages } = this.props; 

        return ( 
            <Fragment>
                <CommentArea comments={messages.messages} />  
                <CommentForm id={id} />  
            </Fragment>    
        );
    }
};

function mapStateToProps (state) {
    return {
        messages: state.messages,
    };
};

function mapDispatchToProps (dispatch) {
    return {
        onGetMessages: id => dispatch(getMessages(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartDialogContainer);