import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';


export default function CheckboxCustom({ fieldName, value, label, handleChange }) {
    
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={value}
                    onChange={(e) => {
                        handleChange({ target: { value: e.target.checked } }, fieldName)
                    }}
                    value={fieldName}
                    color="primary"
                />
            }
            label={label}
        />
    )
}