import React from 'react';
import { Grid, Typography } from '@material-ui/core';


export default function Footer() {
    return (
        <Grid item xs={12} style={{marginTop: 10}}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                {/* <Link color="inherit" href="https://www.linkedin.com/in/kayoriccelo/"> */}
                Kayo Riccelo 2019
                 {/* </Link>{' '} */}
            </Typography>
        </Grid>
    );
};
