import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SearchList, TableList } from '../../components';
import { getList, deleteItem, setTitle } from './store/ducks';


export const List = ({ data, page, pageSize, getList, deleteItem, setTitle, history }) => {
    const columns = [
        { field: 'code', label: 'Code', is_edit: true },
        { field: 'description', label: 'Description' },
        { field: 'actions', label: 'Actions' }
    ];
    let timer = null;
    let search = '';

    useEffect(() => {
        getList(page, pageSize);
    }, [page, pageSize, getList])

    useEffect(() => {
        setTitle('Journeys');

        return () => {
            setTitle('Dashboad');
            clearTimeout(timer);
        };
    }, [timer, setTitle]);

    const onSearch = event => {
        clearTimeout(timer);
        
        search = event.target.value;
        timer = setTimeout(() => getList(page, pageSize, search), 1500);
    };

    const clickAdd = () => history.push('/registration/journey/new');

    const clickDelete = id => deleteItem(id, 0, pageSize);

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
                path='/registration/journey'
            />
        </>
    )
};

const mapStateToProps = ({ journey, pagination }) =>
    ({ data: journey.data, page: pagination.page, pageSize: pagination.pageSize });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList, deleteItem, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);