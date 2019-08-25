import React from 'react';
import { Paper, InputBase, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';


export default function SearchList({ onSearch, clickAdd, children }) {
    const classes = useStyles();
    return (
        <div className={classes.rootSearch}>
            <Paper className={classes.paperSearch}>
                <SearchIcon className={classes.iconButton} />
                <InputBase
                    className={classes.inputSearch} placeholder="Search" inputProps={{ 'aria-label': 'Journey' }}
                    onChange={onSearch}
                />
                {children}
                {clickAdd &&
                    <Button variant="contained" className={classes.buttonAdd} onClick={clickAdd}>
                        <AddIcon />
                    </Button>
                }
            </Paper>
        </div>
    )
};