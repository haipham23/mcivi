import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Model from './ProfileModel';

import ProfileNav from './ProfileNav';
import SectionAbout from './SectionAbout';
import SectionExperience from './SectionExperience';
import SectionEducation from './SectionEducation';
import SectionSkills from './SectionSkills';
import SectionInterest from './SectionInterest';

import * as cons from '../../constants/profile';

class Profile extends Component {
  render() {
    const { t } = this.context;

    return (
      <div className="profile" id="page-top">
        <ProfileNav t={t} navs={cons.navs} />

        <div className="container-fluid p-0">
          <SectionAbout t={t} socials={cons.socials} />
          <SectionExperience t={t} experiences={cons.experiences} />
          <SectionEducation t={t} educations={cons.educations} />
          <SectionSkills t={t} skills={cons.skills} tools={cons.tools} flows={cons.flows} />
          <SectionInterest t={t} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = Model.propTypes;
Profile.contextTypes = Model.contextTypes;

export default compose(
  connect(
    Model.mapStateToProps,
    Model.mapDispatchToProps
  )
)(Profile);
