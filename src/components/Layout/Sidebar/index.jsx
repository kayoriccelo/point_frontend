import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';
import { Drawer, Divider, List, IconButton, Avatar, ListItem, ListItemText, ListItemIcon, ListSubheader, Collapse } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import useStyles from './styles';
import { setOpenBar, loadUser } from './store/ducks';
import { menus } from "../../../routes/menus";


export const Sidebar = ({ history, user, openBar, setOpenBar, loadUser }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    useEffect(() => {
        loadUser()
    }, [loadUser]);

    useEffect(() => {
        window.innerWidth <= 500 && setOpenBar(false);
    }, [setOpenBar]);

    const renderMenuItem = (item, is_sub_menu = false) => {

        let classIf = is_sub_menu ? { className: classes.nested } : {}

        return !item.menus
            ? (
                <ListItem button key={item.title} onClick={() => history.push(item.path)} {...classIf}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItem>
            ) : (
                <>
                    <ListItem button key={item.title} onClick={() => setOpen(!open)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {item.menus.map(sub_menu => renderMenuItem(sub_menu, true))}
                        </List>
                    </Collapse>
                </>
            )
    };

    return (
        <Drawer variant="permanent" open={openBar}
            classes={{
                paper: clsx(classes.drawerPaper, !openBar && classes.drawerPaperClose),
            }}
        >
            <div style={{ position: 'absolute', padding: '12px 0px 0px 8px' }}>
                <Avatar aria-label="Recipe" className={classes.avatar}
                    src="https://img.lovepik.com/element/40028/3809.png_860.png" />
            </div>
            <div className={classes.toolbarIcon}>
                <IconButton onClick={() => setOpenBar(false)}>
                    <MenuIcon />
                </IconButton>
            </div>
            <Divider />
            <List
                component="nav" aria-labelledby="nested-list-subheader"
                subheader={openBar &&
                    <ListSubheader component="div" id="nested-list-subheader">
                        Menus
                    </ListSubheader>
                }
            >
                {menus.map(item => {
                    if (item.roles.indexOf(user.role) > -1) {
                        return renderMenuItem(item);
                    };

                    return false
                })}
            </List>
        </Drawer>
    );
};

const mapStateToProps = ({ sidebar, auth }) => ({ openBar: sidebar.openBar, user: auth.user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setOpenBar, loadUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
