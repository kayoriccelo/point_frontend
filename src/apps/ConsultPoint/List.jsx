import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList, setRangeDate, setTitle } from './store/ducks';
import { SearchList, TableList, InputDate } from '../../components';


export const List = ({ range_date, data, page, pageSize, getList, setRangeDate, setTitle }) => {
    const columns = [
        { field: 'cpf', label: 'Cpf', is_edit: true },
        { field: 'name', label: 'Name' },
        { field: 'journey_display', label: 'Journey' }
    ];
    const [search, setSearch] = useState('');

    useEffect(() => {
        getList(page, pageSize);
    }, [page, pageSize, getList])

    useEffect(() => {
        setTitle('Employees for consult');

        return () => setTitle('Dashboad');
    }, [getList, setTitle]);

    const onSearch = (event) => {
        let timer;
        clearTimeout(timer);
        setSearch(event.target.value);
        timer = setTimeout(() => getList(search), 1000);
    };

    const setStart = (end, method) => e => method({ start: e.target.value, end });

    const setEnd = (start, method) => e => method({ start, end: e.target.value });

    return (
        <>
            <SearchList onSearch={onSearch}>
                <InputDate label="Start" value={range_date.start} handleChange={setStart(range_date.end, setRangeDate)} />
                <InputDate label="End" value={range_date.end} handleChange={setEnd(range_date.start, setRangeDate)} />
            </SearchList>
            <TableList
                columns={columns}
                data={data}
                path='/consultpoint'
                params={['cpf']}
                paramsValue={[range_date.start, range_date.end]}
            />
        </>
    );
};

const mapStateToProps = ({ consultpoint, pagination }) =>
 ({ data: consultpoint.data, range_date: consultpoint.range_date, page: pagination.page, pageSize: pagination.pageSize });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList, setRangeDate, setTitle }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
