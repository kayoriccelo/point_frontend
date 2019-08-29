import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Paper } from '@material-ui/core';

import useStyles from './styles';
import { load, setTitle, showMessage } from './store/ducks';
import { TableList } from '../../components';
import { maskCpf } from '../../components/InputText/masks';


export const Form = ({ instance, load, setTitle, match }) => {
    const columns = [
        { field: 'date', label: 'Date' },
        { field: 'entry', label: 'Entry' },
        { field: 'interval_output', label: 'Interval Output' },
        { field: 'return_interval', label: 'Return Interval' },
        { field: 'leave', label: 'Leave' },
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
        instance && setTitle(`Points of ${instance['name']}`);

        return () => setTitle('Dashboard');
    }, [instance, setTitle]);


    return (consultpoint &&
        <>
            <div className={classes.rootHeader}>
                <Paper className={classes.paperHeader}>
                    <Grid
                        container
                        style={{ padding: 10 }}
                    >
                        <Grid item xs={12} sm={4} style={{ paddingBottom: 4 }}>
                            <b>Cpf:</b> {maskCpf(consultpoint.cpf)}
                        </Grid>
                        <Grid item xs={12} sm={8} style={{ paddingBottom: 4 }}>
                            <b>Name:</b> {consultpoint.name}
                        </Grid>
                        <Grid item xs={12}>
                            <b>Journey:</b> {consultpoint.journey}
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <TableList
                columns={columns}
                data={{ itens: consultpoint.points }}
                is_pagination={false}
            />
        </>
    );
};

const mapStateToProps = ({ consultpoint }) => ({ instance: consultpoint.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, setTitle, showMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
