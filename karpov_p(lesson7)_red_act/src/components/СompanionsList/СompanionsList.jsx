import './СompanionsList.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function СompanionsList (props) {  
    const { companionsRend } = props; 

    return (             
        <div className="companions-block">
            <ul className="companions-list">
                {companionsRend}
            </ul>     
        </div>
    );
};

СompanionsList.propTypes = {
    companionsRend: PropTypes.array.isRequired,
};