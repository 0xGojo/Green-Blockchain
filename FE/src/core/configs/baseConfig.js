import { getEnv } from './envConfig';

export const BaseConfig = {
    END_POINT: {
        AUTH: {
            LOGIN:`${getEnv('API_SERVER')}/api/login`,
            REGISTER:`${getEnv('API_SERVER')}/api/register`,
        },
        ADMIN: {
            UPDATE_BANNER:`${getEnv('API_SERVER')}/api/update_banner`,
            GET_BANNER:`${getEnv('API_SERVER')}/api/get_banner`
        },
        CONTACT: `${getEnv('API_SERVER')}/api/contact`,
    },
    ROUTE_TITLE: {
        '/': 'Welcome to VidOps',
        '/login':'Login - VidOps',
        '/register':'Register - VidOps',
    }
}
