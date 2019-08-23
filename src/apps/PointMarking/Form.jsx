import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Card, CardContent, Button } from "@material-ui/core";

import { save, setTitle } from "./store/ducks";
import { InputText, InputPassword, SelectCustom } from '../../components';
import useStyles from "./styles";


export const Form = ({ save, setTitle }) => {
    const classes = useStyles();
    const [pointMarking, setPointMarking] = useState({ cpf: '', password: '', tipo: '' });
    const [currentTime, setCurrentTime] = useState();

    useEffect(() => {
        setTitle(`Point Marking`);

        return () => {
            setTitle(`Dashboard`);
            setCurrentTime(null);
        };
    }, [setTitle, setCurrentTime]);

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
    });

    const handleChange = (event, name) => setPointMarking({ ...pointMarking, [name]: event.target.value });

    const handlePasswordChange = prop => event => setPointMarking({ ...pointMarking, [prop]: event.target.value });

    const clickSubmit = () => save({ ...pointMarking, hora: currentTime }).then(res => setPointMarking({ cpf: '', password: '', tipo: '' }));

    return (
        <Grid container className={classes.grid}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <div className={classes.time}><b>{currentTime}</b></div>

                    <SelectCustom label="Type" values={pointMarking} fieldName="tipo" handleChange={handleChange} options={[
                        { key: '0', value: 'E', label: 'Entry' }, { key: '1', value: 'SI', label: 'Interval Output' },
                        { key: '2', value: 'R', label: 'Return Interval' }, { key: '3', value: 'S', label: 'Leave' },
                    ]} />

                    <InputText label="Cpf" value={pointMarking.cpf} handleChange={(e) => handleChange(e, "cpf")} />

                    <InputPassword password={pointMarking.password} handleChange={(e) => handlePasswordChange(e, 'password')} />

                    <Button key="submit" variant="contained" color="primary" className={classes.button} onClick={() => clickSubmit()}>
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};


const mapDispatchToProps = (dispatch) => bindActionCreators({ save, setTitle }, dispatch);

export default connect(null, mapDispatchToProps)(Form);
