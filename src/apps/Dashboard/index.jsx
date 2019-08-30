import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardHeader, CircularProgress } from '@material-ui/core';
import Chart from "react-google-charts";

import { load, setTitle } from './store/ducks';


export const Dashboard = ({ data, load, setTitle }) => {
    useEffect(() => {
        localStorage.getItem('access') && load();

        setTitle('Dashboard');
    }, [load, setTitle]);

    const options = {
        legend: "none",
        chartArea: { width: '90%' },
        bar: { groupWidth: "50" },
        fontSize: 8,
        animation: {
            duration: 1000,
            startup: true,
        }
    };

    return (
        data !== {} ? (
            <div style={{ height: 'calc(100vh - 150px)', overflow: 'auto' }}>
                <Card>
                    <CardHeader
                        title="Employees by journey"
                    />
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="100%"
                        data={data['employees']}
                        options={{
                            ...options,
                            vAxis: {
                                logScale: true
                            }
                        }}
                    />
                    <div style={{ textAlign: 'center' }}>*The graph is limited to the top 10 values.</div>
                </Card>
                <div style={{ border: 0, borderBottom: '1px dashed #ccc', background: '#999', marginBottom: 10 }}></div>
                <Card>
                    <CardHeader
                        title="Point markings by journey"
                    />
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="100%"
                        data={data['points']}
                        options={{
                            ...options,
                            vAxis: {
                                logScale: true
                            }
                        }}
                    />
                    <div style={{ textAlign: 'center' }}>*The graph is limited to the top 10 values.</div>
                </Card>
            </div>
        ) : (
                (
                    <div style={{ height: 'calc(80vh - 0px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <CircularProgress style={{ margin: 4 }} />
                        <b style={{ marginTop: 4 }}>loading...</b>
                    </div>
                )
            )
    );
};

const mapStateToProps = ({ dashboard }) => ({ data: dashboard.data });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
