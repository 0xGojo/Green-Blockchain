import axios from 'axios';
import { requestService } from './requestService';

class HttpService {
    _get(endpoint, contentType) {
        return new Promise(async (resolve, reject) => {
            axios.get(endpoint, await requestService.getAuthHeaders(contentType))
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(this.handleError(error));
                });
        });
    }

    _post(endpoint, _data, contentType) {
        return new Promise(async (resolve, reject) => {
            axios.post(endpoint, _data, await requestService.getAuthHeaders(contentType))
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(this.handleError(error));
                });
        });
    }

    _put(endpoint, _data, contentType) {
        return new Promise(async (resolve, reject) => {
            axios.put(endpoint, _data, await requestService.getAuthHeaders(contentType))
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(this.handleError(error));
                });
        });
    }

    _delete(endpoint) {
        return new Promise((resolve, reject) => {
            axios.delete(endpoint, requestService.getAuthHeaders())
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(this.handleError(error));
                });
        });
    }

    handleError(error) {
        // if (error && error.status === 401) {
        //   //todo
        // }
        if (error.response)
            return error.response.data;
        else if (error.message)
            return error;
        else
            return 'Server Internal Error!';
    }
}

export const httpService = new HttpService();
