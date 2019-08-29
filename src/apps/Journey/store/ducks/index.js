import { setTitle } from '../../../../components/Layout/Header/store/ducks';
import { showMessage } from '../../../../components/Message/store/ducks';
import { getListDefault, loadDefault, saveDefault, deleteDefault } from '../../../Core/store/ducks';
import { setPages } from '../../../../components/TablePagination/store/ducks';


export { setTitle };

export const Types = {
    LIST: 'journey/LIST',
    GET: 'journey/GET',
    PUT: 'journey/PUT',
    POST: 'journey/POST',
    DELETE: 'journey/DELETE'
};

export function createInstance() {
    return {
        code: null,
        description: '',
        entry: '00:00',
        interval_output: '00:00',
        return_interval: '00:00',
        leave: '00:00',
        has_remunerated_rest: true
    };
};

export const getList = (page, pageSize, search = '') => getListDefault(search, page, pageSize, 'journey', Types.LIST);

export const load = (id) => loadDefault(id, 'journey', Types.GET)

export const save = (jornada, history) => saveDefault(jornada, 'journey', Types.POST, history, '/registration/journey');

export const deleteItem = (id, page, pageSize) => {
    return dispatch => {
        deleteDefault(id, 'journey').then(res => {
            dispatch(showMessage({ open: true, message: 'Record successfully deleted.', variant: 'success' }));
            dispatch(getList(page, pageSize));
            dispatch(setPages(page, pageSize));
        }, error => {
            dispatch(showMessage({ open: true, message: 'Unable to delete record.', variant: 'error' }));
        });
    };
};

export const initialState = {
    data: { itens: [], count: 0 },
    instance: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LIST:
            return { ...state, data: { itens: action.payload.results, count: action.payload.count } };

        case Types.GET:
            return { ...state, instance: action.payload };

        case Types.POST:
            return { ...state, instance: action.payload };

        case Types.PUT:
            return { ...state, instance: action.payload };

        case Types.DELETE:
            return { ...state };

        default:
            return state;
    };
};
