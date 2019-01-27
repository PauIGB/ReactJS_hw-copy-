import './CommentForm.css';
import PropTypes from 'prop-types';
import React from 'react';

import classNames from 'classnames';

export default function CommentForm (props) {
    const { text, isDisabled, onHandleChange, onAddComment } = props;

    const formStyles = classNames('form');
    const textareaStyles = classNames('form__text-area');
    const formbtnStyles = classNames('form__sub-btn', {
        'form__sub-btn--disabled': isDisabled === "disabled",
        'form__sub-btn--active': isDisabled === false,
    });       

    return(
        <form action="#" className={formStyles}>
            <textarea name="text" onChange={onHandleChange} className={textareaStyles} placeholder="..." value={text} autoFocus></textarea>
            <input onClick={onAddComment} className={formbtnStyles} type="submit" disabled={isDisabled} />                          
        </form>
    );
};

CommentForm.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool, 
    ]).isRequired,
    onHandleChange: PropTypes.func.isRequired,
    onAddComment: PropTypes.func.isRequired,
};