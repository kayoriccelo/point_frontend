import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../Login';
import SignUp from '../SignUp';
import Main from '../Main';


export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route path='/' component={Main} />
            </Switch>
        </Router>
    );
};
