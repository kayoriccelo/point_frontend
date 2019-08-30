import api from '../../../../services/api';
import { showMessage } from '../../../../components/Message/store/ducks';


export function getListDefault(search, page, pageSize, model, type) {
    search = search !== '' ? `?search=${search}&` : `?`;

    search += `page=${page + 1}&page_size=${pageSize}`

    return dispatch => {
        return api.get(`api/${model}${search}`).then(res => {
            dispatch({ type, payload: res.data });
        });
    };
};

export function loadDefault(id, model, type) {
    return dispatch => {
        return api.get(`api/${model}?id=${id}`).then(res => {
            dispatch({ type, payload: res.data.results ? res.data.results[0] : res.data });
        }, error => {
            dispatch(showMessage({ open: true, message: 'Unable to load.', variant: 'error' }));
        });
    };
};

export function saveDefault(instance, model, type, history, path) {
    return dispatch => {
        const crud = instance['id'] ? { method: api.put, url: `${instance.id}/` } : { method: api.post, url: '' };

        return crud.method(`api/${model}/${crud['url']}`, instance).then(res => {
            dispatch({ type, payload: res.data });
            dispatch(showMessage({ open: true, message: 'Record successfully saved.', variant: 'success' }));
            history.push(path);
        }, error => {
            try {
                dispatch(showMessage({ open: true, message: error.response.data.non_field_errors[0], variant: 'error' }));
            } catch (e) {
                dispatch(showMessage({ open: true, message: 'Unable to save record. ', variant: 'error' }));
            };
        });
    };
};

export function deleteDefault(id, model) {
    return api.delete(`api/${model}/${id}`)
};
