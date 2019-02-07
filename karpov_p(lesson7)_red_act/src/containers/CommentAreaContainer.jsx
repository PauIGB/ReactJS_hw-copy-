import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { eventSubscriber } from '../actions';
import CommentArea from 'components/CommentArea';
import MessageItem from 'components/MessageItem';

class CommentAreaContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.commentArea = React.createRef();
    };

    componentDidMount() {
        this.props.eventSubscriber()
    }

    componentDidUpdate(prevProps) {  
        const { comments } = this.props;               
        if (comments !== prevProps.comments) {
            const diff = (comments.length - prevProps.comments.length) === 1;
            this.scrollDown(diff ? 'smooth' : undefined);
        };
    };
    
    scrollDown(behavior) {
        const commArea = this.commentArea.current;
        commArea.scrollTo({
            top: commArea.scrollHeight,
            behavior,
        });
    };

    render() {
        const { comments } = this.props;    
        const messageRend = comments.map((comment, idx) => {
            return (<MessageItem key={idx} text={comment.body} type={comment.type} />)         
        });  

        return (  
            <CommentArea messageRend={messageRend} ref={this.commentArea} />       
        );
    };  
};

function mapDispatchToProps(dispatch) {
    return {
        eventSubscriber: () => eventSubscriber(dispatch),
    };
};

export default connect(null, mapDispatchToProps)(CommentAreaContainer);