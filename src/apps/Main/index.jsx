import React from 'react';

import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Layout/Footer';
import useStyles from './styles';


export default function Main() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Sidebar />
            <Content />
            <Footer />
        </div>
    );
};
