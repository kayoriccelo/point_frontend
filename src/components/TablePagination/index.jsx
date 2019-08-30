import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TableFooter, TableRow, TablePagination as TablePaginationUI } from '@material-ui/core';

import { setPages } from './store/ducks';
import TablePaginationActions from './Actions';


export const TablePagination = ({ count, page, pageSize, setPages }) => {

    const handleChangePage = (event, newPage) => setPages(newPage, pageSize);

    const handleChangeRowsPerPage = event => {
        setPages(0, parseInt(event.target.value, 10));
    };

    useEffect(() => {
        return () => setPages(0, pageSize);
    }, [pageSize, setPages])

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

const mapStateToProps = ({ pagination }) => ({ ...pagination });
const mapDispatchToProps = dispatch => bindActionCreators({ setPages }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);
