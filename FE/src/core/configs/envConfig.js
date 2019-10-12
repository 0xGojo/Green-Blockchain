const ENV = {
    LCL: {
        API_SERVER: 'http://localhost:1995',
        RECAPTCHA_KEY: '',
        TRACKING_ID: '117089241613',
    },
    DEV: {
        API_SERVER: 'http://203.205.52.40:1995',
        RECAPTCHA_KEY: '',
        TRACKING_ID: '117089241613',
    },
    STG: {
        API_SERVER: '',
        RECAPTCHA_KEY: '',
        TRACKING_ID: '117089241613',
    },
    PRO: {
        API_SERVER: '',
        RECAPTCHA_KEY: '',
        TRACKING_ID: '117089241613',
    }
};

const getEnv = (name, defaultValue) => {
    return process.env[name] || ENV[process.env.REACT_APP_STAGE || "LCL"][name] || defaultValue;
};

export { getEnv };