import React from 'react';

import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Layout/Footer';
import { Message } from '../../components';
import useStyles from './styles';


export default function Main({ history }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header history={history} />
            <div className={classes.main}>
                <Sidebar history={history} />
                <Content history={history}/>
            </div>
            <Footer />
            <Message />
        </div>
    );
};
