import './RegistrationForm.css';

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function RegistrationForm (props) { 
    const { user_name, isDisabled, status, onHandleChange, onClick } = props;
    const regInputStyles = classNames('form-reg__input');
    const regSubStyles = classNames('form-reg__sub-btn', {
        'form-reg__sub-btn--disabled': isDisabled === 'disabled',
        'form-reg__sub-btn--active': isDisabled === false,
    });   
    const statusBlock = classNames('status-block', {  
        'status-error': status === '...something went wrong, open browser console',
    });    
    
    return (  
        <Fragment>
            <h1 className="main-heading">Please enter your name</h1>
            <form className="form-reg" action="#">
                <input className={regInputStyles} id="reg-input" type="text" name="user_name" onChange={onHandleChange} placeholder="Ваше имя" value={user_name} />
                <button className={regSubStyles} id="reg-submit" onClick={onClick} disabled={isDisabled}>Войти</button>
                <Link to="/chat" id="reg-link" ></Link>
            </form>
            <div className={statusBlock}>{status}</div>
        </Fragment>
        );   
};

RegistrationForm.propTypes = {
    user_name: PropTypes.string.isRequired,
    isDisabled: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool, 
    ]).isRequired,
    status: PropTypes.string,
    onHandleChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};