import React, { PureComponent } from 'react';
// import { func } from 'prop-types';

class SectionInterest extends PureComponent {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="project">
        <div className="my-auto">
          <h2>
            Current Projects
          </h2>
          <p>
            Campaign manager for AXA Hong Kong
          </p>
          <p className="mb-5">
            Travel eCommerce for AXA Hong Kong - Integrate with PayDollar payment gateway
          </p>

          <h2>
            Previous Projects
          </h2>
          <p>
            <a href="https://www.krungthai-axa.co.th/en/iprotect-s" target="_blank" rel="noopener noreferrer">Standalone React Component for Krungthai AXA</a>
          </p>
          <p>
            <a href="https://travel.axa-insurance.co.id" target="_blank" rel="noopener noreferrer">Travel eCommerce for AXA Indonesia</a> - Integrate with DOKU payment gateway
          </p>
          <p className="mb-5">
            <a href="https://www.axa.com.ph" target="_blank" rel="noopener noreferrer">AXA Philippines website</a> - Develop and maintain
          </p>

          <h2>
            Side Projects
          </h2>
          <p>
            <a href="https://react-redux-boilerplate.com/" target="_blank" rel="noopener noreferrer">React Redux Boilerplate</a>
          </p>
        </div>
      </section>
    );
  }
}

// SectionInterest.propTypes = {
//   t: func.isRequired
// };

export default SectionInterest;

