import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';
import { Drawer, Divider, List, IconButton, Avatar, ListItem, ListItemText, ListItemIcon, ListSubheader } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';
import { setOpenBar } from './store/ducks';
import { menus } from "../../../routes/menus";


export const Sidebar = ({ history, openBar, setOpenBar }) => {
    const classes = useStyles();

    const renderMenuItem = (item) => (
        <ListItem button key={item.title} onClick={() => history.push('/dashboard')}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
        </ListItem>
    );

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !openBar && classes.drawerPaperClose),
            }}
            open={openBar}
        >
            <div style={{ position: 'absolute', padding: '6px 0px 0px 10px' }}>
                <Avatar
                    aria-label="Recipe"
                    className={classes.avatar}
                    src="https://img.lovepik.com/element/40028/3809.png_860.png" />
            </div>
            <div className={classes.toolbarIcon}>
                <IconButton onClick={() => setOpenBar(false)}>
                    <MenuIcon />
                </IconButton>
            </div>
            
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    openBar && <ListSubheader component="div" id="nested-list-subheader">
                        Cadastros
                    </ListSubheader>
                }
            >
                {menus.map(item => renderMenuItem(item))}
            </List>
            <Divider />
        </Drawer>
    );
};

const mapStateToProps = ({ sidebar }) => ({ openBar: sidebar.openBar });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setOpenBar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
