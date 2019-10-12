import { 
    UPDATE_BANNER_REQUEST,
    GET_BANNER_REQUEST
} from '../typeAction';

export const updateBanner = (updateData) => ({
    type: UPDATE_BANNER_REQUEST,
    payload: updateData
});

export const getBanner = () => ({
    type: GET_BANNER_REQUEST
});