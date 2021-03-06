import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList, setRangeDate, setTitle } from './store/ducks';
import { SearchList, TableList, InputDate } from '../../components';
import { maskCpf } from '../../components/InputText/masks';


export const List = ({ range_date, data, page, pageSize, getList, setRangeDate, setTitle }) => {
    const columns = [
        { field: 'cpf', label: 'Cpf', is_edit: true, mask: maskCpf },
        { field: 'name', label: 'Name' },
        { field: 'journey_display', label: 'Journey' }
    ];

    let timer = null;
    let search = '';

    useEffect(() => {
        getList(page, pageSize);
    }, [page, pageSize, getList])

    useEffect(() => {
        setTitle('Employees for consult');

        return () => setTitle('Dashboad');
    }, [getList, setTitle]);

    const onSearch = event => {
        clearTimeout(timer);
        
        search = event.target.value;
        timer = setTimeout(() => getList(page, pageSize, search), 1500);
    }

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
