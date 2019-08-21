import React from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './styles';


export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    {/* <Link color="inherit" href="https://www.linkedin.com/in/kayoriccelo/"> */}
                    Kayo Riccelo 2019
                 {/* </Link>{' '} */}
                </Typography>
            </Container>
        </footer>
    );
};
