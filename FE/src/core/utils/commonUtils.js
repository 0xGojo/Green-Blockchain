import { getEnv } from '../../core/configs/envConfig';

export const urlServer = (url) => {
    return `${getEnv('API_SERVER')}${url}`
}

export const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

export const formDataConfig = (data) => {
    let formData = new FormData();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            if (Array.isArray(data[key])) {
                for (let i = 0; i < data[key].length; i++) {
                    formData.append(key, data[key][i]);
                }
            } else {
                formData.append(key, data[key]);
            }
        }
    }
    return formData;
}
