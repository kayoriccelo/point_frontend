import { setTitle } from '../../../../components/Layout/Header/store/ducks';
import { showMessage } from '../../../../components/Message/store/ducks';
import { getListDefault, loadDefault, saveDefault, deleteDefault } from '../../../Core/store/ducks';


export { setTitle };

export const Types = {
    LIST: 'employee/LIST',
    GET: 'employee/GET',
    PUT: 'employee/PUT',
    POST: 'employee/POST',
    DELETE: 'employee/DELETE'
};

export function createInstance() {
    return {
        cpf: null,
        nome: '',
    };
};

export const getList = (search = '') => getListDefault(search, 'employee', Types.LIST); 

export const load = (id) => loadDefault(id, 'employee', Types.GET)

export const save = (employee, history) => saveDefault(employee, 'employee', Types.POST, history, '/registration/employee');

export const deleteItem = (id) => {
    return dispatch => {
        deleteDefault(id, 'employee').then(res => {
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
