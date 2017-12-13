/* eslint no-unused-expressions: "off" */

import { expect } from 'chai';

import isLanguageLoaded from './isLanguageLoaded';

describe('isLanguageLoaded selectors', () => {
  it('should return false', () => {
    expect(isLanguageLoaded({ translations: {} })).to.be.false;
  });

  it('should return true', () => {
    expect(isLanguageLoaded({
      translations: {
        en: {},
        vi: {}
      }
    })).to.be.true;
  });
});
