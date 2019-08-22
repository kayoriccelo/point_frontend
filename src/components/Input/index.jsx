import React from 'react';
import clsx from 'clsx';
import { TextField } from '@material-ui/core';

import useStyles from './styles';


export default function InputPassword({ value, label, handleChange }) {
    const classes = useStyles();

    return (
        <TextField
            className={clsx(classes.margin, classes.input)}
            value={value}
            variant="outlined"
            type='text'
            label={label}
            onChange={handleChange} />
    )
}