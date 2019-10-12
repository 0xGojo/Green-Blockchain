import { httpService } from '../httpService';
import { BaseConfig } from '../../configs/baseConfig';

export const updateBannerService = (uploadData) => {
    const url = BaseConfig.END_POINT.ADMIN.UPDATE_BANNER;
    const response = httpService._post(url, uploadData);
    return response;
};

export const getBannerService = () => {
    const url = BaseConfig.END_POINT.ADMIN.GET_BANNER;
    const response = httpService._get(url);
    return response;
};