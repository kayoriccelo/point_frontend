
export const Types = {
    SHOW: 'message/SHOW'
};

const initialState = {
    open: false,
    message: '',
    variant: ''
};

export default function reducer(state = initialState, action)  {
    switch (action.type) {
        case Types.SHOW:
            return { ...state, ...action.payload };

        default:
            return state;
    };
};

export const showMessage = value => {
    return dispatch => dispatch({ type: Types.SHOW, payload: value });
};
