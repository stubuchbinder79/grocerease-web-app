import {
    SET_USER,
    LOADING_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED
} from '../types';

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
                ...action.payload
            };

        case SET_UNAUTHENTICATED:
            return initialState;

        case LOADING_USER:
            return {
                ...state,
                loading: true
            }

        case SET_USER:
            return {
                authenticated: true,
                laoding: false,
                ...action.payload
            }

        default:
            return state;

    }
}