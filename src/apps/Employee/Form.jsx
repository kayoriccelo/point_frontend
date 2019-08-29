import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FormCustom, InputText, SelectAsync } from '../../components';
import { load, save, createInstance, setTitle } from './store/ducks';


export const Form = ({ id, instance, load, save, setTitle, history }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        employee && setTitle(`Employee: ${employee.name}`);

        return () => setTitle(`Dashboard`);
    }, [employee, setTitle]);

    useEffect(() => {
        if (id === 'new' && employee === null) {
            setEmployee(createInstance());
        } else if (id !== 'new') {
            employee === null && load(id).then(res => {
                employee !== instance && setEmployee(instance);
            });
        };
    }, [employee, instance, id, load]);

    const handleChange = (event, name) => {
        setEmployee({ ...employee, [name]: event.target ? event.target.value : event });
        setTitle(`Employee: ${employee.name}`);
    };

    return (
        employee &&
        <FormCustom
            handlerSubmit={() => save(employee, history)}
            handlerCancel={() => history.push('/registration/employee')}
        >
            <InputText label="Cpf" value={employee.cpf} handleChange={(e) => handleChange(e, 'cpf')} />

            <InputText label="Name" value={employee.name} handleChange={(e) => handleChange(e, 'name')} />

            <SelectAsync label="Journey" url="/api/journey" values={employee} fieldName="journey"
                handleChange={(e) => handleChange(e, "journey")} />
        </FormCustom>
    );
};

const mapStateToProps = ({ employee }) => ({ instance: employee.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);
