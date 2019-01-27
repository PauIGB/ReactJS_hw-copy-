import React, { PureComponent } from 'react';

import CommentArea from 'components/CommentArea';
import MessageItem from 'containers/MessageItemContainer';

export default class CommentAreaContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.commentArea = React.createRef();
    }

    componentDidUpdate(prevProps) {  
        if (this.props.comments !== prevProps.comments) {
            if(this.props.comments.length - prevProps.comments.length === 1) {
                this.scrollDown('smooth');
            } else {
                this.scrollDown()
            }
        };
    };
    
    scrollDown(behavior) {
        // const commArea = document.getElementById('test');
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
