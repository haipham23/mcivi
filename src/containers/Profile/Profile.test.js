import React from 'react';
import { expect } from 'chai';

import Profile from './Profile';

import { mountContainer } from '../../test/mount';

describe('Profile', () => {
  const wrapper = mountContainer(<Profile />);

  it('should render', () => {
    expect(wrapper.find('.profile').length).to.equal(1);

    expect(wrapper.find('ProfileNav').length).to.equal(1);
    expect(wrapper.find('SectionAbout').length).to.equal(1);
    expect(wrapper.find('SectionExperience').length).to.equal(1);
    expect(wrapper.find('SectionEducation').length).to.equal(1);
    expect(wrapper.find('SectionSkills').length).to.equal(1);
    expect(wrapper.find('SectionInterest').length).to.equal(1);
  });
});
