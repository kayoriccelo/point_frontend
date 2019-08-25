import React, { useState } from 'react';
import { TableFooter, TableRow, TablePagination as TablePaginationUI } from '@material-ui/core';

import TablePaginationActions from './Actions';


export default function TablePagination({ count }) {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const handleChangePage = (event, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = event => {
        setPageSize(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableFooter>
            <TableRow>
                <TablePaginationUI
                    rowsPerPageOptions={[10, 20, 50]}
                    colSpan={3}
                    count={count}
                    rowsPerPage={pageSize}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </TableRow>
        </TableFooter>
    );
};
