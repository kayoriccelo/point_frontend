import React, { useState, useEffect, useRef } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import api from '../../services/api';
import useStyles from './styles';


export default function SelectCustom({ label, url, values, fieldName, handleChange }) {
    const classes = useStyles();

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);

        api.get(url).then(res => {
            setOptions(res.data.results);
        });
    }, [url]);

    return (       
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                {label}
            </InputLabel>
            <Select
                value={values[fieldName]}
                onChange={handleChange}
                input={<OutlinedInput labelWidth={labelWidth} name="select" id="outlined-select-simple" />}
            >
                <MenuItem key="none" value="">
                    <em>None</em>
                </MenuItem>
                {options.map(option => {
                    return <MenuItem key={`${option.id}`} value={`${option.id}`}>{option.descricao}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
};
