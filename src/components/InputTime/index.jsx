import React from 'react';
import { TextField } from '@material-ui/core';

import useStyles from './styles';


export default function InputTime({ fieldName, value, label, handleChange }) {
    const classes = useStyles();

    return (
        <TextField
            className={classes.textField} InputLabelProps={{ shrink: true }}
            value={value}
            variant="outlined"
            inputProps={{ step: 300 }}
            type="time"
            label={label}
            onChange={e => handleChange(fieldName)(e)}
        />
    )
}