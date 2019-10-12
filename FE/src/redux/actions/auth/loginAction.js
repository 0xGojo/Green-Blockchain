//import library
import { LOGIN_REQUEST } from '../typeAction';

export const login = (email, password) => ({
    type: LOGIN_REQUEST,
    payload: { email, password }
});