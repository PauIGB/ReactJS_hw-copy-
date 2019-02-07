import './CompanionItem.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CompanionItem(props) {
    const{ text, id } = props;
      
    return (
        <li className="companions__item">
            <NavLink className="companions__link" to={`/chat/${id}`}>{text}</NavLink>
            <hr className="companions__hr" />
        </li>     
    );
};

CompanionItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};