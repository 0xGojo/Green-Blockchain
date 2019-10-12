import { storageService } from './storageService';

class RequestService {
    constructor() {
        this.getAuthHeaders();
    }

    async getAuthHeaders(contentType) {
        let _headers = this.getHeaders(contentType ? contentType : '');
        let authToken = await storageService.getAuthToken();

        _headers['Authorization'] = authToken;

        return { headers: _headers };
    }

    getHeaders(contentType) {
        let headers = {};
        let _ctype = '';
        switch (contentType) {
            case 'json':
                _ctype = 'application/json';
                break;
            case 'form-data':
                _ctype = '';
                break;
            case 'multipart':
                _ctype = 'multipart/form-data';
                break;
            default:
                _ctype = 'application/json';
                break;
        }
        if (_ctype) {
            headers = Object.assign({ 'Content-Type': _ctype });
        }

        return headers;
    }
}

export const requestService = new RequestService();
