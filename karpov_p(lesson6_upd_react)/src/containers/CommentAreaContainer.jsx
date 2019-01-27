import React from 'react';

import CommentArea from 'components/CommentArea';
import MessageItem from 'containers/MessageItemContainer';

export default function CommentAreaContainer(props) {
    const { comments } = props;
    
    const messageRend = comments.map((comment, idx) => {
        return (<MessageItem key={idx} text={comment.body} type={comment.type} />)         
    });      
    return (  
        <CommentArea messageRend={messageRend} />       
    );
};
