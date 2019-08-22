import React from 'react';
import { Grid, Card } from '@material-ui/core';
import { Switch, Redirect } from 'react-router-dom';

import useStyles from './styles';
import { routes } from '../../../routes';
import Footer from '../Footer';
import PrivateRoute from '../../PrivateRoute'


export default function Content() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <div className={classes.appBarSpacer} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.card}>
                        <Switch>
                            {routes.map(route => {
                                return <PrivateRoute {...route} />
                            })}
                            <Redirect from="/" to="/dashboard" />
                        </Switch>
                    </div>
                </Grid>
                <Footer />
            </Grid>
        </main>
    );
};
