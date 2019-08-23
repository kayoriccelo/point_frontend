import React, { useState } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';

import useStyles from './styles';


export default function InputPassword({ label, password, handleChange }) {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);


    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = event => event.preventDefault();

    return (
        <TextField
            className={clsx(classes.margin, classes.input)}
            variant="outlined" type={showPassword ? 'text' : 'password'}
            label={label ? label : "Password"}
            value={password}
            onChange={handleChange('password')}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    )
}