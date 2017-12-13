import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Model from './ProfileModel';

class Profile extends Component {
  render() {
    return (
      <div className="container profile">
        <div className="row">
          <div className="col-xs-12 col-md-6 offset-md-3">
            <div className="form-group">
              <label htmlFor="email">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.props.login}
            >
              Submit
            </button>
          </div>
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
