import './CommentArea.css';
import React from 'react';
import PropTypes from 'prop-types';

const CommentArea = React.forwardRef((props, ref) => (
    <div 
        className="comment-area" 
        id="test"
        ref={ref}
    >
        {props.messageRend} 
    </div>
  ));

export default CommentArea;

CommentArea.propTypes = {
    messageRend: PropTypes.array.isRequired,
};