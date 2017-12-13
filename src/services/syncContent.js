import { setTranslations } from 'redux-i18n';

import en from '../translations/en.json';
import vi from '../translations/vi.json';

const syncContent = (store) => {
  // @TODO: do something to retrieve content
  const translation = {
    en,
    vi
  };

  store.dispatch(setTranslations(translation));
};

export default syncContent;
