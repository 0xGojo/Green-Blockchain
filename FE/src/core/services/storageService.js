const AUTH_TOKEN = 'AUTH_TOKEN';
const CURRENT_USER = 'CURRENT_USER';

class StorageService {
    setAuthToken(token) {
        localStorage.setItem(AUTH_TOKEN, token);
    }

    getAuthToken() {
        return localStorage.getItem(AUTH_TOKEN);
    }

    removeAuthToken() {
        localStorage.removeItem(AUTH_TOKEN);
    }

    setCurrentUser(data) {
        localStorage.setItem(CURRENT_USER, JSON.stringify(data));
    }

    removeCurrentUser() {
        localStorage.removeItem(CURRENT_USER);
    }
    
    getCurrentUser() {
        return JSON.parse(localStorage.getItem(CURRENT_USER));
    }

    isLoggedIn() {
        if (this.getCurrentUser()) {
            return true;
        }
        return false;
    }

}

export const storageService = new StorageService();
