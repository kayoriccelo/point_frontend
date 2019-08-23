import React, { useState, useEffect, useRef } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './styles';


export default function SelectCustom({ label, values, fieldName, handleChange, options }) {
    const classes = useStyles();
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <FormControl key="type" variant="outlined" className={classes.textField}>
            <InputLabel ref={inputLabel} htmlFor="outlined-type-simple">
                {label}
            </InputLabel>
            <Select
                value={values[fieldName]}
                onChange={(e) => handleChange(e, fieldName)}
                input={<OutlinedInput labelWidth={labelWidth} name="select" id="outlined-select-simple" />}
            >
                {options.map(option => {
                    return <MenuItem key={`${option.key}`} value={`${option.value}`}>{option.label}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
};
