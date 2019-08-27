import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Card, Button, Avatar } from '@material-ui/core';

import { save, showMessage } from './store/ducks';
import useStyles from './styles';
import { InputText, InputPassword, Message } from '../../components';


const SignUp = ({ save, history, showMessage }) => {
    const classes = useStyles();
    const [values, setValue] = useState({ username: '', password: '', email: '', showPassword: false });

    const handleChange = prop => event => setValue({ ...values, [prop]: event.target.value });

    const clickSignUp = () => {
        const { username, password } = values;

        if (username !== '' && password !== '') {
            save(username, password, history);
        } else {
            showMessage({ message: 'Required fields.', variant: 'warning', open: true });
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

                <b style={{ fontSize: 20, paddingBottom: 40 }}>Sign Up to Electronic Point</b>

                <div style={{ width: '90%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid item xs={12} sm={6} style={{ marginRight: 4 }}>
                            <InputText label="First Name *" value={values['first_name']} handleChange={handleChange('first_name')} />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{ marginLeft: 4 }}>
                            <InputText label="Last Name *" value={values['last_name']} handleChange={handleChange('last_name')} />
                        </Grid>
                    </div>

                    <Grid item xs={12}>
                        <InputText label="Email Address *" value={values['email']} handleChange={handleChange('email')} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputPassword label="Password *" password={values['password']} handleChange={() => handleChange('password')} />
                    </Grid>
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => clickSignUp()}
                >
                    Sign Up
                </Button>

                <div style={{ fontSize: 12, marginTop: 8 }}>
                    Already have an account? <Link to="/login" >Login</Link>
                </div>
            </Card>

            <Message />
        </Grid>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ save, showMessage }, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
