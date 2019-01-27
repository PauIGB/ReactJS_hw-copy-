import './CommentArea.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function CommentArea (props) {     
    const { messageRend } = props;

    return(            
        <div className="comment-area">
            {messageRend} 
        </div>
    );
};

CommentArea.propTypes = {
    messageRend: PropTypes.array.isRequired,
};