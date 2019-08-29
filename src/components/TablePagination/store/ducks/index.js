
export const Types = {
    PAGES: 'pagination/PAGES',
};

export const setPages = (page, pageSize) => {
    return dispatch => dispatch({ type: Types.PAGES, payload: { page, pageSize } });
};

const initialState = {
    page: 0,
    pageSize: 10
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.PAGES:
            return { ...state, ...action.payload };

        default:
            return state;
    };
};
