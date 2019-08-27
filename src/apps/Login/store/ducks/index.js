import { apiNotToken } from '../../../../services/api';
import { showMessage } from '../../../../components/Message/store/ducks';


export { showMessage };

export const Types = {
    LOGIN: 'login/LOGIN',
};

export function authenticate(username, password, history) {
    return dispatch => {
        return apiNotToken.post('api/token/', { username, password }).then(res => {
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);

            dispatch({
                type: Types.LOGIN,
                payload: {
                    isLogged: true,
                    access: res.data.access,
                    refresh: res.data.refresh,
                    user: {
                        name: res.data.name,
                        cpf: res.data.cpf
                    }
                }
            });

            history.push('/dashboard');
        }, error => {
            try {
                dispatch(showMessage({ open: true, message: error.response.data.non_field_errors[0], variant: 'error' }));
            } catch (e) {
                dispatch(showMessage({ open: true, message: 'Not Authorized. ', variant: 'error' }));
            };
        });
    };
};

export const initialState = {
    isLogged: false,
    access: null,
    refresh: null,
    user: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOGIN:
            return { ...state, ...action.payload };

        default:
            return state;
    };
};
