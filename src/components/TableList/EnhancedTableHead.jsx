import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core';


export default function EnhancedTableHead({ classes, columns, order, orderBy, onRequestSort }) {

    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {columns.map(column => (
                    column.field !== 'actions' ?
                        <TableCell
                            key={column.field}
                            sortDirection={orderBy === column.field ? order : false}
                            className={classes.tableCell}
                        >
                            <TableSortLabel
                                active={orderBy === column.field}
                                direction={order}
                                onClick={createSortHandler(column.field)}
                            >
                                {column.label}
                            </TableSortLabel>
                        </TableCell>
                        :
                        <TableCell className={classes.tableCell} key={column.field}>{column.label}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}