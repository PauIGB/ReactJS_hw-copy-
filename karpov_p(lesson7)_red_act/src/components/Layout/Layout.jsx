import 'normalize.css';
import './Layout.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegistrationForm from 'containers/RegistrationFormContainer';
import Chat from 'containers/ChatContainer';

export default function Layout() {

    return (
        <div className="wrapper">
            <Switch>
                <Route path='/' component={RegistrationForm} exact />
                <Route path="/chat" render={() => <Chat exact />} />
            </Switch>
        </div>
    );
};