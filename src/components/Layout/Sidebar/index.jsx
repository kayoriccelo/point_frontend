import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';
import { Drawer, Divider, List, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import useStyles from './styles';
import { setOpenBar } from './store/ducks';


export const Sidebar = ({ openBar, setOpenBar }) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !openBar && classes.drawerPaperClose),
            }}
            open={openBar}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={() => setOpenBar(false)}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            {/* <List>{mainListItems}</List> */}
            <Divider />
            {/* <List>{secondaryListItems}</List> */}
        </Drawer>
    );
};

const mapStateToProps = ({ sidebar }) => ({ openBar: sidebar.openBar });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setOpenBar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
