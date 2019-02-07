import 'normalize.css';
import './Layout.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import layout from 'routes/layout';

export default function Layout() {

    return (
        <div className="wrapper">
            <Switch> 
                {layout.map((route, idx) => <Route {...route} key={idx} />)}             
            </Switch>
        </div>
    );
};