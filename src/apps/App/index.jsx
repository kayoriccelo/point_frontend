import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import history from '../../store/history';
import Main from '../Main';


export default function App() {
    return (
        <Router history={history}>
            <Switch>            
                <Route path='/' component={Main} />
            </Switch>
        </Router>
    );
};
