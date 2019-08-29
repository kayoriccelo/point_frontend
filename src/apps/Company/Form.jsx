import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FormCustom, InputText } from '../../components';
import { load, update, setTitle } from './store/ducks';


export const Form = ({ instance, load, update, setTitle, history }) => {
    const [company, setCompany] = useState(null);

    useEffect(() => {
        company && setTitle(`Company: ${company.business_name}`);

        return () => setTitle(`Dashboard`);
    }, [company, setTitle]);

    useEffect(() => {
        company === null && load().then(resp => {
            company !== instance && setCompany(instance);
        });
    }, [company, instance, load]);

    const handleChange = (event, name) => {
        setCompany({ ...company, [name]: event.target.value });
        setTitle(`Company: ${company.business_name}`);
    };

    return (
        company &&
        <FormCustom
            handlerSubmit={() => update(company, history)}
            handlerCancel={() => history.push('/dashboad')}
        >
            <InputText label="Cnpj" value={company.cnpj} handleChange={(e) => handleChange(e, 'cnpj')} />

            <InputText label="Business Name" value={company.business_name} handleChange={(e) => handleChange(e, 'business_name')} />

            <InputText label="Email" value={company.email} handleChange={(e) => handleChange(e, 'email')} />

            <InputText label="Phone" value={company.phone} handleChange={(e) => handleChange(e, 'phone')} />
        </FormCustom>
    );
};

const mapStateToProps = ({ company }) => ({ instance: company.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, update, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);
