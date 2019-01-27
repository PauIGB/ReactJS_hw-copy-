
import React, { PureComponent } from 'react';

import MessageItem from 'components/MessageItem';

export default class MessageItemContainer extends PureComponent {   
    componentDidMount() {
        const commArea = document.querySelector('.comment-area');
        commArea.scrollTo({
            top: commArea.scrollHeight,
            behavior: 'smooth',
        })
    } 

    render() { 
        const { text, type } = this.props;          
        return (  
            <MessageItem text={text} type={type}/>       
        );
    }
};