import api from '../../../../services/api';
import { setTitle } from '../../../../components/Layout/Header/store/ducks';
import { showMessage } from '../../../../components/Message/store/ducks';
import { getListDefault } from '../../../Core/store/ducks';


export { showMessage, setTitle };

export const Types = {
    LIST: 'consultpoint/LIST',
    GET: 'consultpoint/GET',
    RANGE_DATE: 'consultpoint/RANGE_DATE'
};

export const getList = (page, pageSize, search = '') => getListDefault(search, page, pageSize, 'employee', Types.LIST);

export function load(cpf, start, end) {
    return dispatch => {
        return api.get(`api/consultpoint?cpf=${cpf}&start=${start}&end=${end}`).then(res => {
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
    data: { itens: [], count: 0 },
    instance: null,
    range_date: {
        start: new Date().toISOString().substring(0, 10),
        end: new Date().toISOString().substring(0, 10)
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LIST:
            return { ...state, data: { itens: action.payload.results, count: action.payload.count } };

        case Types.GET:
            return { ...state, instance: action.payload };

        case Types.RANGE_DATE:
            return { ...state, range_date: action.payload };

        default:
            return state;
    };
};
