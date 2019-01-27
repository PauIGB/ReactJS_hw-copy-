import './CompanionItem.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CompanionItem(props) {
    const{ text, id, location } = props;
    const companionStyles = classNames('companions__item',  {
        'active': location === `/chat/${id}`,            
    });
      
    return (
        <li className={companionStyles}>
            <Link className="companions__link" to={`/chat/${id}`}>{text}</Link>
            <hr className="companions__hr" />
        </li>     
    );
};

CompanionItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
};