import api from '../../../../services/api';
import { setTitle } from '../../../../components/Layout/Header/store/ducks';
import { showMessage } from '../../../../components/Message/store/ducks';


export { setTitle };

export const Types = {
    PUT: 'pointmarking/POST',
};

export const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    };
};

export function save(pointMarking) {
    return dispatch => {
        return api.post(`api/pointmarking/`, pointMarking).then(res => {
            dispatch(showMessage({ open: true, message: 'Marcação realizada com sucesso.', variant: 'success' }));
        }, error => {
            let errorMsg = Array.isArray(error.response.data.error) ? error.response.data.error[0] : error.response.data.error;
            let msg = errorMsg ? errorMsg : 'Não foi possível realizar a marcação.';
            
            dispatch(showMessage({ open: true, message: msg, variant: 'error' }));
        });
    };
};
