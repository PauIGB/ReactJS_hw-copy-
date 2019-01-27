import './CommentArea.css';
import React from 'react';
import PropTypes from 'prop-types';

const CommentArea = React.forwardRef((props, ref) => (
    // const { messageRend } = props;
    <div 
        className="comment-area" 
        id="test"
        ref={ref}
    >
        {props.messageRend} 
    </div>
  ));

export default CommentArea;
// export default function CommentArea (props) {     
//     const { messageRend } = props;
//     let comAreaRef = React.createRef;

//     return(            
//         <div 
//             className="comment-area" 
//             id="test"
//             ref={commentArea}
//         >
//             {messageRend} 
//         </div>
//     );
// };

CommentArea.propTypes = {
    messageRend: PropTypes.array.isRequired,
};