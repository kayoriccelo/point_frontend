import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FormCustom, InputText } from '../../components';
import { maskCnpj, maskPhone } from '../../components/InputText/masks';
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

    const handleChange = (name) => event => {
        setCompany({ ...company, [name]: event.target.value });
        setTitle(`Company: ${company.business_name}`);
    };

    return (
        company &&
        <FormCustom
            handlerSubmit={() => update(company, history)}
            handlerCancel={() => history.push('/dashboad')}
        >
            <InputText label="Cnpj" maxLength="18" value={maskCnpj(company.cnpj)} handleChange={handleChange('cnpj')} />

            <InputText label="Business Name" maxLength="14" value={company.business_name} handleChange={handleChange('business_name')} />

            <InputText label="Email" maxLength="100" value={company.email} handleChange={handleChange('email')} />

            <InputText label="Phone" maxLength="15" value={maskPhone(company.phone)} handleChange={handleChange('phone')} />
        </FormCustom>
    );
};

const mapStateToProps = ({ company }) => ({ instance: company.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, update, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);
