import { 
    LOADING_DATA,
    SET_ITEMS,
    DELETE_ITEM,
    CREATE_ITEM } from '../types';

    const initialState = {
        items: [],
        loading: false
    }

    export default function(state = initialState, action) {
        switch(action.type) {
            case LOADING_DATA:
                return {
                    ...state,
                    loading: true
                };

            case SET_ITEMS: 
                return {
                    ...state,
                    loading: false,
                    items: action.payload
                }; 
            

            case CREATE_ITEM:
                return {
                    ...state,
                    items: [action.pauyload, ...state.items]
                }

            case DELETE_ITEM:
                let index = state.items.findIndex(
                    (item) => item.itemId === action.payload
                );
                state.items.splice(index,1);
                return {
                    ...state
                }
            default:
                return state;
        }
    }