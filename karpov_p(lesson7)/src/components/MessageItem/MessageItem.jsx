import './MessageItem.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MessageItem(props) {       
    const{ text, type } = props;
    const messageStyles = classNames('message',  {
        'message-guest': type === 'guest',
        'message-my': type === 'me',
    });
    const commentWrapStyles = classNames('comm-wrap', {
        'wrap-left': type === 'guest',
        'wrap-right': type === 'me',
    });             
    
    return(
        <div className={commentWrapStyles}>
            <div className={messageStyles}>{text}</div>            
        </div>            
    );
};

MessageItem.propTypes = {
    type: PropTypes.oneOf(['guest', 'me'])
};

MessageItem.defaultProps = {
    type: 'guest',
    text: [], 
};