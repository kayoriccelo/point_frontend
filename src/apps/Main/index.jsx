import React from 'react';

import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import { Message } from '../../components';
import useStyles from './styles';


export default function Main({ history }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header history={history}/>
            <Sidebar history={history}/>
            <Content />
            <Message />
        </div>
    );
};
