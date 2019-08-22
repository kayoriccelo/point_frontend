const Types = {
    SET_OPEN_BAR: 'sidebar/SET_OPEN_BAR',
};

export const setOpenBar = value => {
    return dispatch => dispatch({ type: Types.SET_OPEN_BAR, payload: value });
};

const initialState = {
    openBar: true,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_OPEN_BAR:
            return { ...state, openBar: action.payload };

        default:
            return state;
    };
};
