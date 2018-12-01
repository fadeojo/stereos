import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import * as en from './en';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LngDetector)
    // pass the i18n instance to the react-i18next components.
    // Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprovider
    .use(reactI18nextModule)
    .init({
        whitelist: ['en', 'en-US'],
        fallbackLng: 'en',
        ns: ['common', 'errors'],
        defaultNS: 'common',
        debug: true,
        resources: {
            en,
            'en-US': en,
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // special options for react-i18next
        // learn more: https://react.i18next.com/components/i18next-instance
        react: {
            wait: true,
        },
    });

export default i18n;
