import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';

import { InputText, InputTime, CheckboxCustom } from '../../components';
import { load, save, createInstance, setTitle } from './store/ducks';


export const Form = ({ id, instance, load, save, setTitle, history }) => {
    const [journey, setJourney] = useState(null);

    useEffect(() => {
        setTitle(`Journey: ${journey && journey.descricao}`);

        return () => setTitle(`Dashboard`);
    }, [journey, setTitle]);

    useEffect(() => {
        if (id === 'new' && journey === null) {
            setJourney(createInstance());
        } else if (id !== 'new') {
            journey === null && load(id).then(res => {
                journey !== instance && setJourney(instance);
            });
        };
    }, [journey, instance, id, load]);

    const handleChange = (event, name) => {
        setJourney({ ...journey, [name]: event.target.value });
        setTitle(`Journey: ${journey.descricao}`);
    };

    const handlerSubmit = () => save(journey, history);

    return (
        journey &&
        <Card>
            <CardContent>
                <InputText label="Code" value={journey.codigo} handleChange={(e) => handleChange(e, 'codigo')} />

                <InputText label="Description" value={journey.descricao} handleChange={(e) => handleChange(e, 'descricao')} />
                
                <InputTime label="Entry" fieldName="entrada" value={journey.entrada} handleChange={handleChange} />

                <InputTime label="Interval Output" fieldName="saida_intervalo" value={journey.saida_intervalo} handleChange={handleChange} />

                <InputTime label="Return Interval" fieldName="retorno_intervalo" value={journey.retorno_intervalo} handleChange={handleChange} />

                <InputTime label="Leave" fieldName="saida" value={journey.saida} handleChange={handleChange} />

                <CheckboxCustom label="Has Remunerated Rest" fieldName="possui_dsr" value={journey.possui_dsr} handleChange={handleChange} />
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handlerSubmit}> Save </Button>
                <Button size="small" color="primary" onClick={() => history.push('/jornadas')}> Cancel </Button>
            </CardActions>
        </Card>
    );
};

const mapStateToProps = ({ journey }) => ({ instance: journey.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);
