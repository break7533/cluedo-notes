import i18n from 'i18next';
import en from './en/ns1.json';
import pt from './pt/ns1.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
    en: {
        res: en,
    },
    pt: {
        res: pt,
    },
} as const;

const languages = ['en', 'pt'];

i18n.use(initReactI18next).init({
    lng: languages.includes(navigator.language.slice(0, 2))
        ? navigator.language.slice(0, 2)
        : 'en',
    ns: ['res'],
    resources,
});
