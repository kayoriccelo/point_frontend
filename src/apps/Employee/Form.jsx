import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';

import { InputText, InputPassword, SelectAsync } from '../../components';
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

    const handlePasswordChange = prop => event => setEmployee({ ...employee, [prop]: event.target.value });

    const handlerSubmit = () => save(employee, history);

    return (
        employee &&
        <Card style={{ height: 'calc(100vh - 160px)', overflow: 'auto' }}>
            <CardContent>
                <InputText label="Cpf" value={employee.cpf} handleChange={(e) => handleChange(e, 'cpf')} />

                <InputText label="Name" value={employee.name} handleChange={(e) => handleChange(e, 'name')} />

                <SelectAsync label="Journey" url="/api/journey" values={employee} fieldName="journey"
                    handleChange={(e) => handleChange(e, "journey")} />

                <InputText label="Email" value={employee.email} handleChange={(e) => handleChange(e, 'email')} />

                <InputText label="Username" value={employee.username} handleChange={(e) => handleChange(e, 'username')} />

                <InputPassword label="New password" password={employee.new_password} handleChange={() => handlePasswordChange('new_password')} />

            </CardContent>
            <CardActions>
                <div style={{ marginLeft: 'auto' }}>
                    <Button
                        size="small" variant="contained" color="secondary"
                        onClick={() => history.push('/registration/employee')}
                    > Cancel </Button>
                    <Button
                        size="small" variant="contained" color="primary" style={{ margin: 8 }}
                        onClick={handlerSubmit}
                    > Save </Button>
                </div>
            </CardActions>
        </Card>
    );
};

const mapStateToProps = ({ employee }) => ({ instance: employee.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);
