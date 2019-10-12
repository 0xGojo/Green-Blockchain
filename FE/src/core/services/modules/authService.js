import  { httpService } from '../httpService';
import { BaseConfig } from '../../configs/baseConfig';

export const loginService = (authData) => {
    const url = BaseConfig.END_POINT.AUTH.LOGIN;
    const response = httpService._post(url, authData);
    return response;
};