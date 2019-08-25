import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TableFooter, TableRow, TablePagination as TablePaginationUI } from '@material-ui/core';

import { setPage, setPageSize } from './store/ducks';
import TablePaginationActions from './Actions';


export const TablePagination = ({ count, page, pageSize, setPage, setPageSize }) => {

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

const mapStateToProps = ({ pagination }) => ({ ...pagination });
const mapDispatchToProps = dispatch => bindActionCreators({ setPage, setPageSize }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);
