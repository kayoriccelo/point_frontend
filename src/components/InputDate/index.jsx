import React from 'react';
import { TextField } from '@material-ui/core';

import useStyles from './styles';


export default function InputDate({ value, label, handleChange }) {
    const classes = useStyles();

    return (
        <TextField
            label={label}
            type="date"
            className={classes.dateField}
            value={value}
            onChange={handleChange}
            InputLabelProps={{ shrink: true, }}
        />
    );
};
