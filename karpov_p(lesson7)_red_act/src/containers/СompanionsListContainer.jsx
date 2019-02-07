import React from 'react';

import СompanionsList from 'components/СompanionsList';
import CompanionItem from 'components/CompanionItem';

export default function СompanionsListContainer (props) {
    const { companions } = props;
      
    const companionsRend = companions.companions.map((companion, idx) => {
        return (<CompanionItem key={idx} text={companion.name} id={companion.id} />)         
    });    

    return (     
        <СompanionsList companionsRend={companionsRend} />
    );
};