import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Switch } from 'react-router-dom';

import useStyles from './styles';
import { routes } from '../../../routes';
import Footer from '../Footer';
import PrivateRoute from '../../PrivateRoute'


export default function Content() {
    const classes = useStyles();

    return (
        <>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container>
                        <Switch>
                            {routes.map(route => {
                                return <PrivateRoute {...route} />
                            })}
                        </Switch>
                    </Grid>
                </Container>
                <Footer />
            </main>
        </>
    );
};
