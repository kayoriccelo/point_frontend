import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Card, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';
import TablePagination from '../TablePagination';


export default function TableList({ columns, itens, actions, path, params = ['id'], paramsValue = [] }) {
    const classes = useStyles();

    let paramValue = '';
    paramsValue.map(param => paramValue = paramValue + '/' + param);

    return (
        <div className={classes.rootTable}>
            <Card style={{ maxHeight: 'calc(80vh - 120px)', overflowX: 'auto', overflowY: 'visible'}}>
                <Table size="small">
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            {columns.map(column => <TableCell className={classes.tableCell} key={column.field}>{column.label}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {itens.map(item => {
                            let itemValue = '';
                            params.map(param => itemValue = itemValue + '/' + item[param]);

                            return (<TableRow key={item.id}>
                                {columns.map((column, index) => {
                                    if (column.is_edit) {
                                        return (
                                            <TableCell key={`${item.id}-${index}`}>
                                                <Link to={`${path}${itemValue}${paramValue}`}>
                                                    {item[column.field]}
                                                </Link>
                                            </TableCell>
                                        )
                                    } else if (column.field === 'actions') {
                                        return (
                                            <TableCell key="deleteItem">
                                                <IconButton aria-label="delete" onClick={() => actions[0](item.id)}>
                                                    <DeleteIcon fontSize="small" color="secondary" />
                                                </IconButton>
                                            </TableCell>
                                        )
                                    } else {
                                        return <TableCell key={`${item.id}-${index}`}>{item[column['field']]}</TableCell>
                                    };
                                })}
                            </TableRow>)
                        })}
                    </TableBody>
                    <TablePagination />
                </Table>
            </Card>
        </div>
    );
};
