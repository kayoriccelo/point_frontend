import React from 'react';
import { TextField } from '@material-ui/core';

import useStyles from './styles';


export default function InputCustom({ value, label, maxLength, handleChange }) {
    const classes = useStyles();

    return (
        <TextField
            className={classes.textField}
            value={value}
            variant="outlined"
            type='text'
            label={label}
            inputProps={{
                maxLength: maxLength,
              }}
            onChange={handleChange} />
    );
};
