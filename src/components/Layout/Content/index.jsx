import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import useStyles from './styles';
import { routes } from '../../../routes';
import PrivateRoute from '../../PrivateRoute'


export default function Content() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <div className={classes.appBarSpacer} />
            <div className={classes.content}>
                <Switch>
                    {routes.map(route => {
                        return <PrivateRoute {...route} />
                    })}
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </div>
        </div>
    );
};
