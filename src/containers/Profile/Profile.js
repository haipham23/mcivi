import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Model from './ProfileModel';

class Profile extends Component {
  render() {
    const { isLangLoaded } = this.props;

    if (!isLangLoaded) {
      return (
        <div className="loader">Loading</div>
      );
    }

    return (
      <div className="container profile">
        Profile
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
