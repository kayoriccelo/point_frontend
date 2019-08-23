import { setTitle } from '../../../../components/Layout/Header/store/ducks';
import { getListDefault, loadDefault, saveDefault, deleteDefault } from '../../../Core/store/ducks';
import { showMessage } from '../../../../components/Message/store/ducks';


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
        codigo: null,
        descricao: '',
        entrada: '00:00',
        saida_intervalo: '00:00',
        retorno_intervalo: '00:00',
        saida: '00:00',
        possui_dsr: true
    };
};

export const getList = (search = '') => getListDefault(search, 'journey', Types.LIST);

export const load = (id) => loadDefault(id, 'journey', Types.GET)

export const save = (jornada, history) => saveDefault(jornada, 'journey', Types.POST, history, '/registration/journey');

export const deleteItem = (id) => {
    return dispatch => {
        deleteDefault(id, 'journey').then(res => {
            dispatch(showMessage({ open: true, message: 'Record successfully deleted.', variant: 'success' }));
            dispatch(getList());
        }, error => {
            dispatch(showMessage({ open: true, message: 'Unable to delete record.', variant: 'error' }));
        });
    };
};

export const initialState = {
    itens: [],
    instance: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LIST:
            return { ...state, itens: action.payload };

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
