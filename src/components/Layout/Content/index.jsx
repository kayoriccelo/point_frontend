import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import useStyles from './styles';
import { routes } from '../../../routes';


export default function Content() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Switch>
                        {routes.map(route => {
                            return <Route {...route}/>
                        })}
                    </Switch>
                </Grid>
            </Container>
        </main>
    );
};
