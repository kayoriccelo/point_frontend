import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Paper } from '@material-ui/core';

import useStyles from './styles';
import { load, setTitle, showMessage, setRangeDate } from './store/ducks';
import { TableList, InputDate } from '../../components';


export const List = ({ range_date, instance, load, setRangeDate, setTitle }) => {
    const columns = [
        { field: 'date', label: 'Date' },
        { field: 'entry', label: 'Entry' },
        { field: 'interval_output', label: 'Interval Output' },
        { field: 'return_interval', label: 'Return Interval' },
        { field: 'leave', label: 'Leave' },
    ];
    const classes = useStyles();
    const [employee, setEmployee] = useState(null)

    useEffect(() => {
        employee === null && load(range_date.start, range_date.end).then(res => {
            employee !== instance && setEmployee(instance);
        });
    }, [employee, instance, range_date, load]);

    useEffect(() => {
        setTitle(`My Points`);

        return () => setTitle('Dashboard');
    }, [setTitle]);

    const setStart = (end, method) => e => {
        method({ start: e.target.value, end });
        setEmployee(null);
    };

    const setEnd = (start, method) => e => {
        method({ start, end: e.target.value });
        setEmployee(null);
    };

    return (employee &&
        <>
            <div className={classes.rootHeader}>
                <Paper className={classes.paperHeader}>
                    <Grid container style={{ padding: 10, display: 'flex' }}>
                        <InputDate label="Start" value={range_date.start} handleChange={setStart(range_date.end, setRangeDate)} />

                        <InputDate label="End" value={range_date.end} handleChange={setEnd(range_date.start, setRangeDate)} />
                    </Grid>
                </Paper>
            </div>
            <TableList
                columns={columns}
                data={{ itens: employee.points }}
                is_pagination={false}
            />
        </>
    );
};

const mapStateToProps = ({ mypoints }) => ({ instance: mypoints.instance, range_date: mypoints.range_date });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, setTitle, showMessage, setRangeDate }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
