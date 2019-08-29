import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Card, CardContent, Button } from "@material-ui/core";

import { save, setTitle } from "./store/ducks";
import { InputText, InputPassword, SelectCustom } from '../../components';
import { maskCpf } from '../../components/InputText/masks';
import useStyles from "./styles";


export const Form = ({ save, setTitle }) => {
    const classes = useStyles();
    const [pointMarking, setPointMarking] = useState({ cpf: '', password: '', type: '' });
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

    const handleChange = name => event => setPointMarking({ ...pointMarking, [name]: event.target.value });

    const handlePasswordChange = name => event => setPointMarking({ ...pointMarking, [name]: event.target.value });

    const clickSubmit = () => save({ ...pointMarking, hour: currentTime }).then(res => setPointMarking({ cpf: '', password: '', type: '' }));

    return (
        <Grid container className={classes.grid}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <div className={classes.time}><b>{currentTime}</b></div>

                    <SelectCustom label="Type" values={pointMarking} fieldName="type" handleChange={handleChange} options={[
                        { key: '0', value: 'E', label: 'Entry' }, { key: '1', value: 'IO', label: 'Interval Output' },
                        { key: '2', value: 'RI', label: 'Return Interval' }, { key: '3', value: 'L', label: 'Leave' },
                    ]} />

                    <InputText label="Cpf" maxLength="14" value={maskCpf(pointMarking.cpf)} handleChange={handleChange("cpf")} />

                    <InputPassword password={pointMarking.password} handleChange={handlePasswordChange('password')} />

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
