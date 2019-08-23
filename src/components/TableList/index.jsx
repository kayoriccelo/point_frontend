import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';


export default function TableList({ columns, itens, actions, path }) {
    const classes = useStyles();
    
    return (
        <div className={classes.rootTable}>
            <Paper>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => <TableCell key={column.field}>{column.label}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {itens.map(item => (
                            <TableRow key={item.id}>
                                {columns.map((column, index) => {
                                    if (index === 0) {
                                        return <TableCell key={`${item.id}-${index}`}>
                                            <Link to={`${path}${item.id}`}>
                                                {item[column.field]}
                                            </Link>
                                        </TableCell>
                                    } else if (index === columns.length - 1) {
                                        return <TableCell key="deleteItem">
                                            <IconButton aria-label="delete" onClick={() => actions[0](item.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    } else {
                                        return <TableCell key={`${item.id}-${index}`}>{item[column['field']]}</TableCell>
                                    };
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};