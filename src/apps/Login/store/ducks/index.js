import api from '../../../../services/api';


export const Types = {
    LOGIN: 'login/LOGIN',
};

export function authenticate(username, password, history) {
    return dispatch => {
        return api.post('api/token/', { username, password }).then(res => {
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
            return { message: 'Não autorizado.' };
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
