
export const Types = {
    PAGE: 'pagination/PAGE',
    PAGE_SIZE: 'pagination/PAGE_SIZE'
};

export const setPage = value => {
    return dispatch => dispatch({ type: Types.PAGE, payload: value });
};

export const setPageSize = value => {
    return dispatch => dispatch({ type: Types.PAGE_SIZE, payload: value });
};

const initialState = {
    page: 0,
    pageSize: 10
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.PAGE:
            return { ...state, page: action.payload };

        case Types.PAGE_SIZE:
            return { ...state, pageSize: action.payload };

        default:
            return state;
    };
};
