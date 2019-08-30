import api from '../../../../services/api';
import { setTitle } from '../../../../components/Layout/Header/store/ducks';
import { showMessage } from '../../../../components/Message/store/ducks';


export { showMessage, setTitle };

export const Types = {
    LIST: 'mypoint/LIST',
    GET: 'mypoint/GET',
    RANGE_DATE: 'mypoint/RANGE_DATE'
};

export function load(start, end) {
    return dispatch => {
        return api.get(`api/consultpoint?start=${start}&end=${end}`).then(res => {
            dispatch({ type: Types.GET, payload: res.data });
        }, error => {
            dispatch(showMessage({ open: true, message: 'Unable to load.', variant: 'error' }));
        });
    };
};

export function setRangeDate(values) {
    return dispatch => {
        dispatch({ type: Types.RANGE_DATE, payload: values });
    };
};

export const initialState = {
    instance: null,
    range_date: {
        start: new Date().toISOString().substring(0, 10),
        end: new Date().toISOString().substring(0, 10)
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET:
            return { ...state, instance: action.payload };

        case Types.RANGE_DATE:
            return { ...state, range_date: action.payload };

        default:
            return state;
    };
};
