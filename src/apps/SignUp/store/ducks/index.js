import { apiNotToken } from '../../../../services/api';
import { showMessage } from '../../../../components/Message/store/ducks';


export { showMessage };

export const Types = {
    SIGNUP: 'signup/SIGNUP',
};

export function save(user, history) {
    return dispatch => {
        return apiNotToken.post('api/user-custom/', user).then(res => {

            dispatch({
                type: Types.SIGNUP,
                payload: res.data
            });

            history.push('/login');
        }, error => dispatch(showMessage({ open: true, message: 'Not Authorized.', variant: 'error' })));
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
