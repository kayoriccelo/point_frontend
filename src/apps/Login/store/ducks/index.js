import { apiNotToken } from '../../../../services/api';
import { showMessage } from '../../../../components/Message/store/ducks';
import { loadUser } from '../../../../auth/store/ducks';


export { showMessage };

export const Types = {
    LOGIN: 'login/LOGIN',
    LOGOUT: 'login/LOGOUT'
};

export function authenticate(username, password, history) {
    return dispatch => {
        return apiNotToken.post('api/token/', { username, password }).then(res => {
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);

            dispatch(loadUser(history));
        }, error => {
            try {
                dispatch(showMessage({ open: true, message: error.response.data.non_field_errors[0], variant: 'error' }));
            } catch (e) {
                dispatch(showMessage({ open: true, message: 'Not Authorized. ', variant: 'error' }));
            };
        });
    };
};

export function logout() {
    return dispatch => {
        dispatch({ type: Types.LOGOUT, payload: false });
        localStorage.clear();
        window.location.href = '/login';
    };
};

export const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOGIN:
            return { ...state, isLogged: action.payload };

        case Types.LOGOUT:
            return { ...state, isLogged: action.payload };

        default:
            return state;
    };
};
