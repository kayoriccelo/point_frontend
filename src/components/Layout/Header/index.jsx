import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography, Badge, Avatar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

import useStyles from './styles';

import { setOpenBar } from './store/ducks';


export const Header = ({ title, openBar, setOpenBar }) => {
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
                    <Avatar
                        aria-label="Recipe"
                        className={classes.avatar}
                        src="https://img.lovepik.com/element/40028/3809.png_860.png" />

                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    {title}
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = ({ header, sidebar }) => ({ title: header.title, openBar: sidebar.openBar });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setOpenBar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);