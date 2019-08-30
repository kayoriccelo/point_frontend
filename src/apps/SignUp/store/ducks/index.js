import { apiNotToken } from '../../../../services/api';
import { showMessage } from '../../../../components/Message/store/ducks';


export { showMessage };

export const Types = {
    SIGNUP: 'signup/SIGNUP',
};

export function save(user, history) {
    return dispatch => {
        return apiNotToken.post('api/userallowany/', user).then(res => {

            dispatch({
                type: Types.SIGNUP,
                payload: res.data
            });

            dispatch(showMessage({ open: true, message: 'User successfully saved', variant: 'success' }));

            history.push('/login');
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
    user: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SIGNUP:
            return { ...state, user: action.payload };

        default:
            return state;
    };
};
