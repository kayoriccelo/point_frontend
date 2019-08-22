import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Card, Button, Avatar } from '@material-ui/core';

import { authenticate, showMessage } from './store/ducks';
import useStyles from './styles';
import { Input, InputPassword, Message } from '../../components';


const Login = ({ authenticate, history, showMessage }) => {
    const classes = useStyles();
    const [values, setValue] = useState({ username: 'kayoriccelo', password: '123456', showPassword: false });

    const handleChange = prop => event => setValue({ ...values, [prop]: event.target.value });

    const clickSignin = () => {
        const { username, password } = values;

        if (username !== '' && password !== '') {
            authenticate(username, password, history);
        } else {
            showMessage({ message: 'Campos obrigatórios.', variant: 'warning', open: true });
        };
    };

    return (
        <Grid container alignItems="center" justify="center" className={classes.root}>
            <Card className={classes.card}>
                <div style={{ paddingBottom: 20 }}>
                    <Avatar
                        aria-label="Recipe"
                        src="https://img.lovepik.com/element/40028/3809.png_860.png" />
                </div>

                <b style={{ fontSize: 20, paddingBottom: 40 }}>Login to Electronic Point</b>
                
                <Input label="Username" value={values['username']} handleChange={handleChange('username')} />

                <InputPassword password={values['password']} handleChange={() => handleChange('password')} />

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => clickSignin()}
                >
                    Login
                </Button>
            </Card>

            <Message />
        </Grid>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ authenticate, showMessage }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
