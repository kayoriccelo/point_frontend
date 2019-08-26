import React from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './styles';


export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary" align="center" className={classes.textSecondary}>
                    {'Copyright © '}
                    <a href="https://www.linkedin.com/in/kayoriccelo/" style={{ color: '#3385ff' }} target="_blank" rel="noopener noreferrer">
                        Kayo Riccelo
                        </a>
                    {' 2019'}
                </Typography>
            </Container>
        </footer>
    );
};
