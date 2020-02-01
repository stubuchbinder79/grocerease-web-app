import {
    LOADING_DATA,
    LOADING_UI,
    SET_ITEMS,
    CREATE_ITEM,
    ACTIVATE_ITEM,
    DEACTIVATE_ITEM,
    CLEAR_ERRORS,
    SET_ERRORS,
} from '../types';

import axios from 'axios';

// get all user's items
export const getItems = () => (dispatch) => {
    dispatch({
        type: LOADING_DATA
    });

    axios
        .get('/items')
        .then(res => {
            dispatch({
                type: SET_ITEMS,
                payload: res.data
            }
            );
        })
        .catch(err => {
            console.log(err);
        });
}

export const createItem = (item) => (dispatch) => {
    console.log(`dataActions.createItem: ${item.title}`);
    dispatch({
        type: LOADING_UI
    });
    axios
        .post('/item', { title: String(item.title) })
        .then(res => {
            dispatch({
                type: CREATE_ITEM,
                payload: res.data
            });
            dispatch(clearErrors());
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.data
            })
        })
}

export const setItemActive = ({ itemId }) => (dispatch) => {
    dispatch({
        type: LOADING_DATA,
    })
    axios
        .get(`/item/${itemId}/activate`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: ACTIVATE_ITEM,
                payload: res.data
            })
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: SET_ERRORS,
                payload: err.data
            })
        });
}

export const setItemInactive = ({ itemId }) => (dispatch) => {

    console.log('setItemInactive');
    dispatch({
        type: LOADING_DATA,
    })
    axios
        .get(`/item/${itemId}/deactivate`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: DEACTIVATE_ITEM,
                payload: res.data
            })
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: SET_ERRORS,
                payload: err.data
            })
        });
}
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};