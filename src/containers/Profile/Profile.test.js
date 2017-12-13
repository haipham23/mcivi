import React from 'react';
import { expect } from 'chai';
import { setTranslations } from 'redux-i18n';

import Profile from './Profile';

import { mountContainer, store } from '../../test/mount';

const loadedLang = {
  en: {},
  vi: {}
};

describe.only('Profile', () => {
  const wrapper = mountContainer(<Profile />);

  it('should render Loader', () => {
    expect(wrapper.find('.loader').length).to.equal(1);
    expect(wrapper.find('.profile').length).to.equal(0);
  });

  it('should render Profile', () => {
    store.dispatch(setTranslations(loadedLang));

    wrapper.update();

    expect(wrapper.find('.loader').length).to.equal(0);
    expect(wrapper.find('.profile').length).to.equal(1);
  });
});
