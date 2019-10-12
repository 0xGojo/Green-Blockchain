import i18next from 'i18next';
import { en } from '../locales/en';
import { vi } from '../locales/vi';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            common: en
        },
        vi: {
            common: vi
        },
    },
});
