import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SearchList, TableList } from '../../components';
import { getList, deleteItem, setTitle } from './store/ducks';


export const List = ({ data, page, pageSize, getList, deleteItem, setTitle, history }) => {
    const columns = [
        { field: 'cpf', label: 'Cpf', is_edit: true },
        { field: 'name', label: 'Name' },
        { field: 'actions', label: 'Actions' }
    ];
    const [search, setSearch] = useState('');
    let timer = null;

    useEffect(() => {
        getList(page, pageSize);
    }, [page, pageSize, getList])

    useEffect(() => {
        setTitle('Employees');

        return () => {
            setTitle('Dashboad');
            clearTimeout(timer);
        };
    }, [timer, setTitle]);

    const onSearch = event => {
        clearTimeout(timer);
        setSearch(event.target.value);
        timer = setTimeout(() => getList(search), 1500);
    };

    const clickAdd = () => history.push('/registration/employee/new');

    const clickDelete = id => deleteItem(id, getList);

    return (
        <>
            <SearchList
                onSearch={onSearch}
                clickAdd={clickAdd}
            />
            <TableList
                columns={columns}
                data={data}
                actions={[clickDelete]}
                path='/registration/employee'
            />
        </>
    )
};

const mapStateToProps = ({ employee, pagination }) =>
    ({ data: employee.data, page: pagination.page, pageSize: pagination.pageSize });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList, deleteItem, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);