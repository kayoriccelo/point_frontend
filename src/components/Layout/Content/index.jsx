import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';

import useStyles from './styles';


export default function Content() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper> Content Teste Item </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
};
