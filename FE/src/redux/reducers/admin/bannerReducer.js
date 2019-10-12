import {
    UPDATE_BANNER_REQUEST,
    UPDATE_BANNER_SUCCESS,
    UPDATE_BANNER_FAILED,
    GET_BANNER_REQUEST,
    GET_BANNER_SUCCESS,
    GET_BANNER_FAILED
}   from '../../actions/typeAction';
import { message } from 'antd';

const defaultState = {
    success : false,
    error : null,
    data: null,
    isLoading : false
};

const bannerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_BANNER_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case UPDATE_BANNER_SUCCESS: {
            message.success('Update successful!', 20000);
            return {
                ...state,
                isLoading: false,
                ...action.payload
            };
        }
        case UPDATE_BANNER_FAILED: {
            message.error(`Update fail! ${action.payload.error}`);
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        case GET_BANNER_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case GET_BANNER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                ...action.payload
            };
        }
        case GET_BANNER_FAILED: {
            message.error(`Get banner fail! ${action.payload.error}`);
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        default:
            return state;
    }
}

export default bannerReducer;
