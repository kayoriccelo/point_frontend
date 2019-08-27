import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import history from '../../store/history';
import PrivateRoute from '../../components/PrivateRoute';
import Login from '../Login';
import SignUp from '../SignUp';
import Main from '../Main';


export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <PrivateRoute path='/' component={Main} />
            </Switch>
        </Router>
    );
};
