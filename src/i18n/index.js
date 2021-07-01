import I18n from 'i18n-js';

const en = require('./locales/en.json');
const id = require('./locales/id.json');

I18n.fallbacks = true;
I18n.translations = {
  id,
  en,
};

export const switchLanguage = (language) => {
  I18n.locale = language;
};

export const isBahasa = () => {
  if (I18n.locale.includes('id')) {
    return true;
  }
  return false;
};

export default I18n;
