import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Card, Button, Avatar } from '@material-ui/core';

import { authenticate } from './store/ducks/login';
import useStyles from './styles';
import { Input, InputPassword } from '../../components';


const Login = ({ authenticate, history }) => {
    const classes = useStyles();
    const [values, setValue] = useState({ username: 'kayoriccelo', password: '123456', showPassword: false });

    const handleChange = prop => event => setValue({ ...values, [prop]: event.target.value });

    const clickSignin = () => {
        const { username, password } = values;

        if (username !== '' && password !== '') {
            authenticate(username, password, history)
        };
    };

    return (
        <Grid container alignItems="center" justify="center" className={classes.root}>
            <Card className={classes.card}>
                <div style={{ paddingBottom: 20 }}>
                    <Avatar
                        aria-label="Recipe"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dmeVMYnb5rTJ9nxY63SqPu7u4d4WzwC4jcqmThv_h_4vDKdf" />
                </div>

                <b style={{ fontSize: 20, paddingBottom: 40 }}>Entrar no Ponto Eletrônico</b>
                
                <Input label="Usuário" value={values['username']} handleChange={handleChange('username')} />

                <InputPassword />

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => clickSignin()}
                >
                    Signin
                </Button>
            </Card>

            <Message />
        </Grid>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ authenticate }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
