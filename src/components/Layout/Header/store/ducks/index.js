import { setOpenBar } from '../../../Sidebar/store/ducks';


export { setOpenBar };

const Types = {
    SET_TITLE: 'header/SET_TITLE',
};

export const setTitle = value => {
    return dispatch => dispatch({ type: Types.SET_TITLE, payload: value });
};

const initialState = {
    title: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_TITLE:
            return { ...state, title: action.payload };

        default:
            return state;
    };
};
