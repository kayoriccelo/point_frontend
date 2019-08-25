import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Paper } from '@material-ui/core';

import useStyles from './styles';
import { load, setTitle, showMessage } from './store/ducks';
import { TableList } from '../../components';


export const Form = ({ instance, load, setTitle, match }) => {
    const columns = [
        { field: 'data', label: 'Date' },
        { field: 'entrada', label: 'Entry' },
        { field: 'saida_intervalo', label: 'Interval Output'},
        { field: 'retorno_intervalo', label: 'Return Interval'},
        { field: 'saida', label: 'Leave'},
    ];
    const classes = useStyles();
    const [consultpoint, setPoints] = useState(null)

    useEffect(() => {
        const { cpf, start, end } = match.params;
        consultpoint === null && load(cpf, start, end).then(res => {
            consultpoint !== instance && setPoints(instance);
        });
    }, [consultpoint, instance, match, load]);

    useEffect(() => {
        instance && setTitle(`Points of ${instance['nome']}`);

        return () => setTitle('Dashboard');
    }, [instance, setTitle]);
    

    return (consultpoint &&
        <>
            <div className={classes.rootHeader}>
                <Paper className={classes.paperHeader}>
                    <Grid 
                        container
                        direction="column"
                        justify="center"
                        style={{ padding: 10 }}
                    >
                        <div style={{ paddingBottom: 5 }}><b>Cpf:</b> {consultpoint.cpf}</div>
                        <div style={{ paddingBottom: 5 }}><b>Name:</b> {consultpoint.nome}</div>
                        <div style={{ paddingBottom: 5 }}><b>Journey:</b> {consultpoint.jornada}</div>
                    </Grid>
                </Paper>
            </div>
            <TableList
                columns={columns}
                itens={consultpoint.marcacoes}
            />
        </>
    );
};

const mapStateToProps = ({ consultpoint }) => ({ instance: consultpoint.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, setTitle, showMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
