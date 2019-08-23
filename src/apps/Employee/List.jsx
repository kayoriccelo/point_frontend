import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SearchList, TableList } from '../../components';
import { getList, deleteItem, setTitle } from './store/ducks';


export const List = ({ getList, deleteItem, setTitle, itens, history }) => {
    const columns = [
        { field: 'cpf', label: 'Cpf' },
        { field: 'nome', label: 'Name' },
        { field: 'actions', label: 'Actions'}
    ];
    const [search, setSearch] = useState('');
    let timer = null;

    useEffect(() => {
        getList();
        setTitle('Employees');

        return () => {
            setTitle('Dashboad');
            clearTimeout(timer);
        };
    }, [timer, getList, setTitle]);

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
                itens={itens}
                actions={[clickDelete]}
                path='/registration/employee/'
            />
        </>
    )
};

const mapStateToProps = ({ employee }) => ({ itens: employee.itens });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList, deleteItem, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);