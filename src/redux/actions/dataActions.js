import {
    LOADING_DATA,
    LOADING_UI,
    SET_ITEMS,
    CREATE_ITEM,
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
    dispatch({
        type: LOADING_UI
    });
    axios
        .post('/item', item)
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
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};