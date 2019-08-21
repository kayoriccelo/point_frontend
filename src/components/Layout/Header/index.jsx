import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

import useStyles from './styles';


export default function Header({ title, openBar, setOpenBar }) {
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
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

