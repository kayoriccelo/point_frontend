import React from 'react';
import { Card, CardContent, Button } from '@material-ui/core';

import useStyles from './styles';


export default function FormCustom({ children, handlerSubmit, handlerCancel }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                {children}

                <div className={classes.actions}>
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={handlerCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={handlerSubmit}
                    >
                        Save
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};