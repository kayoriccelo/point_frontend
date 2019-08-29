import React from 'react';
import { Card, CardHeader, CircularProgress } from '@material-ui/core';
import Chart from "react-google-charts";

const data = [
    ["Element", 'Test', { "role": "style" }],
    ['Example 1', 10, 'fill-color: rgb(124, 181, 236); fill-opacity: 0.6;'],
    ['Example 2', 20, 'fill-color: rgb(0, 134, 64); fill-opacity: 0.6;'],
    ['Example 3', 30, 'fill-color: rgb(247, 163, 92); fill-opacity: 0.6;'],
    ['Example 4', 40, 'fill-color: rgb(144, 237, 125); fill-opacity: 0.6;'],
    ['Example 5', 50, 'fill-color: rgb(128, 133, 233); fill-opacity: 0.6;'],
    ['Example 6', 60, 'fill-color: rgb(241, 92, 128); fill-opacity: 0.6;'],
    ['Example 7', 70, 'fill-color: rgb(228, 211, 84); fill-opacity: 0.6;'],
    ['Example 8', 80, 'fill-color: rgb(43, 144, 143); fill-opacity: 0.6;'],
    ['Example 9', 90, 'fill-color: rgb(244, 91, 91); fill-opacity: 0.6;'],
    ['Example 10', 100, 'fill-color: rgb(145, 232, 225); fill-opacity: 0.6;'],
];

export default function Dashboard() {
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
        data.length > 0 ? (
            <div style={{ height: 'calc(100vh - 150px)', overflow: 'auto' }}>
                <Card>
                    <CardHeader
                        title="Employees by journey"
                    />
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="100%"
                        data={data}
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
                        data={data}
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
