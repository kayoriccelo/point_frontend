import React from 'react';

import Header from '../../components/Layout/Header';
import useStyles from './styles';


export default function Main() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
        </div>
    );
};
