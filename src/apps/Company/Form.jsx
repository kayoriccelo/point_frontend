import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';

import { InputText } from '../../components';
import { load, update, setTitle } from './store/ducks';


export const Form = ({ instance, load, update, setTitle, history }) => {
    const [company, setCompany] = useState(null);

    useEffect(() => {
        setTitle(`Company: ${company && company.razao_social}`);

        return () => setTitle(`Dashboard`);
    }, [company, setTitle]);

    useEffect(() => {
        company === null && load().then(resp => {
            company !== instance && setCompany(instance);
        });
    }, [company, instance, load]);

    const handleChange = (event, name) => {
        setCompany({ ...company, [name]: event.target.value });
        setTitle(`Company: ${company.razao_social}`);
    };

    const handlerSubmit = () => update(company, history);

    return (
        company &&
        <Card>
            <CardContent>
                <div>
                    <InputText label="CNPJ" value={company.cnpj} handleChange={(e) => handleChange(e, 'cnpj')} />
                    
                    <InputText label="Razão Social" value={company.razao_social} handleChange={(e) => handleChange(e, 'razao_social')} />

                    <InputText label="Email" value={company.email} handleChange={(e) => handleChange(e, 'email')} />

                    <InputText label="Telefone" value={company.telefone} handleChange={(e) => handleChange(e, 'telefone')} />
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handlerSubmit}> Save </Button>
                <Button size="small" color="primary" onClick={() => history.push('/')}> Cancel </Button>
            </CardActions>
        </Card>
    );
};

const mapStateToProps = ({ company }) => ({ instance: company.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, update, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);
