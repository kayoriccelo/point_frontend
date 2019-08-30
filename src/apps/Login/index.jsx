import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Card, Button } from '@material-ui/core';

import { authenticate, showMessage } from './store/ducks';
import useStyles from './styles';
import { InputText, InputPassword, Message } from '../../components';


const Login = ({ authenticate, history, showMessage }) => {
    const classes = useStyles();
    const [values, setValue] = useState({ username: 'kayoriccelo', password: '123456', showPassword: false });

    const handleChange = prop => event => setValue({ ...values, [prop]: event.target.value });

    const clickLogin = () => {
        const { username, password } = values;

        if (username !== '' && password !== '') {
            authenticate(username, password, history);
        } else {
            showMessage({ message: 'Required fields.', variant: 'warning', open: true });
        };
    };

    return (
        <Grid container alignItems="center" justify="center" className={classes.root}>
            <Card className={classes.card}>
                <img height={60} alt="clock" src={require('./img/clock.png')} />
                
                <b style={{ fontSize: 20, paddingBottom: 40, paddingTop: 10 }}>Login to Electronic Point</b>

                <div style={{ width: '70%' }}>
                    <InputText label="Username" value={values['username']} handleChange={handleChange('username')} />

                    <InputPassword password={values['password']} handleChange={() => handleChange('password')} />
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => clickLogin()}
                >
                    Login
                </Button>
                <div style={{ fontSize: 12, marginTop: 8 }}>
                    Not already have an account? <Link to="/signup" >Sign Up</Link>
                </div>
            </Card>

            <Message />
        </Grid>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ authenticate, showMessage }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
