import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from 'routes/chat';
import СompanionsList from 'containers/СompanionsListContainer';

export default function Chat(props) {
    const { userName, companions } = props;

    return (  
       <Fragment>
           <h1 className="main-heading">Welcome to chat, dear {userName}</h1>
           <СompanionsList companions={companions} />
           <Switch>
                {routes.map((route, idx) => <Route {...route} key={idx} />)}                   
           </Switch>
       </Fragment>
    );
};

Chat.propTypes = {
    userName: PropTypes.string.isRequired,
    companions: PropTypes.object.isRequired,
};


