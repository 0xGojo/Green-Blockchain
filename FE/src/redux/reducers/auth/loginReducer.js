/**
*| Component      : REDUCER LOGIN
*| Author         : trieunb08@gmail.com
*| Created date   : 2019-03-05
*| Description    :
*/
/*============================================================================*/
//import library
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
}   from '../../actions/typeAction';

const defaultState = {
    user_info : {},
    error : null,
    success: false,
    isLoading : false,
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user_info: action.payload.data,
                success: action.payload.success
            };
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            }
        }
        default:
            return state;
    }
}

export default authReducer;
