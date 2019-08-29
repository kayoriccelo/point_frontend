import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableCell, Card, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';
import TablePagination from '../TablePagination';
import EnhancedTableHead from './EnhancedTableHead';


export default function TableList({ columns, data, actions, path, is_pagination = true, params = ['id'], paramsValue = [] }) {
    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState();

    function handleRequestSort(event, property) {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    };

    function desc(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        };

        if (b[orderBy] > a[orderBy]) {
            return 1;
        };

        return 0;
    };

    function stableSort(array, cmp) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = cmp(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
    };

    function getSorting(order, orderBy) {
        return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
    };

    let paramValue = '';
    paramsValue.map(param => paramValue = paramValue + '/' + param);

    return (
        <div className={classes.rootTable}>
            <Card className={is_pagination ? classes.card : classes.cardNotPagination}>
                <Table size="small">
                    <EnhancedTableHead
                        classes={classes}
                        columns={columns}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {stableSort(data.itens, getSorting(order, orderBy)).map(item => {
                            let itemValue = '';
                            params.map(param => itemValue = itemValue + '/' + item[param]);

                            return (
                                <TableRow key={item.id}>
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
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    {is_pagination && <TablePagination count={data.count} />}
                </Table>
            </Card>
        </div>
    );
};
