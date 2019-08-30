import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import { ExitToApp, AccountBox, MoreVert } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

import { setOpenBar, logout } from './store/ducks';



export const Header = ({ user, title, logout, openBar, setOpenBar, history }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

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
                {window.innerWidth > 780 && <div style={{ fontSize: 14, paddingRight: 6 }}>{user.name}</div>}
                <IconButton color="inherit" onClick={handleClick}>
                    <MoreVert />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => { history.push('/profile'); handleClose() }}>
                        <AccountBox /> <div style={{ fontSize: 14, paddingLeft: 6 }}>Profile</div>
                    </MenuItem>
                    <MenuItem onClick={() => { logout(); handleClose() }}>
                        <ExitToApp /><div style={{ fontSize: 14, paddingLeft: 6 }}>Logout</div>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = ({ header, sidebar, auth }) => ({ user: auth.user, title: header.title, openBar: sidebar.openBar });
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout, setOpenBar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);