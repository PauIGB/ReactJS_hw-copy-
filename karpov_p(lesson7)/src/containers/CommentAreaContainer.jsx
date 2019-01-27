import React, { PureComponent } from 'react';

import CommentArea from 'components/CommentArea';
import MessageItem from 'components/MessageItem';

export default class CommentAreaContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.commentArea = React.createRef();
    };

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
