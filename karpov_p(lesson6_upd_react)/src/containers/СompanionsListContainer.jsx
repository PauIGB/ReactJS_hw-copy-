import React from 'react';

import СompanionsList from 'components/СompanionsList';
import CompanionItem from 'components/CompanionItem';
import { withRouter } from 'react-router-dom';

function СompanionsListContainer (props) {
    const { companions, location } = props;
      
    const companionsRend = companions.companions.map((companion, idx) => {
        return (<CompanionItem key={idx} text={companion.name} id={companion.id} location={location.pathname} />)         
    });    

    return (
        companionsRend && !companions.fetching ?          
            <СompanionsList companionsRend={companionsRend} />  
            :
            '..loading'
    );
};

export default withRouter(СompanionsListContainer);