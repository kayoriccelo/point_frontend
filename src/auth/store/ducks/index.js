import api from '../../../services/api';
import { showMessage } from '../../../components/Message/store/ducks';


export { showMessage };

export const Types = {
    USER: 'auth/USER',
};

export function loadUser() {
    return dispatch => {
        return api.get('/api/usertoken/').then(res => {
            dispatch({ type: Types.USER, payload: res.data.results[0] })
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
    user: {
        role: 'guest'
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.USER:
            return { ...state, user: action.payload };

        default:
            return state;
    };
};
