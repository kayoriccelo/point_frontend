import { setTitle } from '../../../../components/Layout/Header/store/ducks';
import { loadDefault, saveDefault } from '../../../Core/store/ducks';


export { setTitle };

export const Types = {
    GET: 'company/GET',
    PUT: 'company/PUT',
};

export const load = () => loadDefault('-1', 'company', Types.GET);

export const update = (company, history) => saveDefault(company, 'company', Types.PUT, history, '/dashboard');

export const initialState = {
    instance: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET:
            return { ...state, instance: action.payload };

        case Types.PUT:
            return { ...state, instance: action.payload };

        default:
            return state;
    };
};
