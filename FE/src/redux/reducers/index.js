import loginReducer from './auth/loginReducer';
import bannerReducer from './admin/bannerReducer';
// import registerReducer from './auth/registerReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    login: loginReducer,
    // register: registerReducer
    banner: bannerReducer
});

export default rootReducer;
