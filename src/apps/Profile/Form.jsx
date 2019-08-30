import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FormCustom, InputText, InputPassword } from '../../components';
import { load, update, setTitle, showMessage } from './store/ducks';


export const Form = ({ instance, load, update, setTitle, showMessage, history }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        profile && setTitle(`Profile: ${profile.first_name} ${profile.last_name}`);

        return () => setTitle(`Dashboard`);
    }, [profile, setTitle]);

    useEffect(() => {
        profile === null && load().then(resp => {
            profile !== instance && setProfile(instance);
        });
    }, [profile, instance, load]);

    const handleChange = (name) => event => {
        setProfile({ ...profile, [name]: event.target.value });
        setTitle(`Profile: ${profile.first_name} ${profile.last_name}`);
    };

    const handlerSubmit = () => {
        if (profile.new_password && profile.new_password === profile.confirm_password) {
            update(profile, history);
        } else {
            showMessage({ open: true, message: 'Passwords not informed or invalid.', variant: 'error' });
        };
    };

    return (
        profile &&
        <FormCustom
            handlerSubmit={handlerSubmit}
            handlerCancel={() => history.push('/dashboad')}
        >
            <InputText label="First Name" maxLength="140" value={profile.first_name} handleChange={handleChange('first_name')} />

            <InputText label="Last Name" maxLength="140" value={profile.last_name} handleChange={handleChange('last_name')} />

            <InputPassword label="Password" password={profile.password} handleChange={() => handleChange('password')} />

            <InputPassword label="New Password" password={profile.new_password} handleChange={() => handleChange('new_password')} />

            <InputPassword label="Confirm Password" password={profile.confirm_password} handleChange={() => handleChange('confirm_password')} />
        </FormCustom>
    );
};

const mapStateToProps = ({ profile }) => ({ instance: profile.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, update, setTitle, showMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);
