import {
    LOADING_DATA,
    LOADING_UI,
    SET_ERRORS,
    CLEAR_ERRORS,
    SET_ITEMS,
    CREATE_ITEM,
    DELETE_ITEM,
    SET_ITEM
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