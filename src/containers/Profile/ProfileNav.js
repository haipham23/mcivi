import React, { PureComponent } from 'react';
import { func, arrayOf, string } from 'prop-types';

import haiProfile from '../../images/hai.jpg';

class ProfileNav extends PureComponent {
  render() {
    const {
      t,
      navs
    } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none" />
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={haiProfile}
              alt=""
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {
              navs.map(item => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item}`}>{t(`${item}`)}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    );
  }
}

ProfileNav.propTypes = {
  t: func.isRequired,
  navs: arrayOf(string).isRequired
};

export default ProfileNav;

