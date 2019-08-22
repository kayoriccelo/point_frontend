import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

import { setOpenBar } from './store/ducks';


export const Header = ({ history, title, openBar, setOpenBar }) => {
    const classes = useStyles();

    return (
        <AppBar position="absolute" className={clsx(classes.appBar, openBar && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setOpenBar(true)}
                    className={clsx(classes.menuButton, openBar && classes.menuButtonHidden)}
                >
                    <MenuIcon />

                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    {title}
                </Typography>
                <IconButton color="inherit" onClick={() => {
                    localStorage.clear();
                    history.push('/login');
                }}>
                    <ExitToApp />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = ({ header, sidebar }) => ({ title: header.title, openBar: sidebar.openBar });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setOpenBar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);