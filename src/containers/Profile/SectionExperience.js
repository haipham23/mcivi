import React, { PureComponent } from 'react';
import { func, arrayOf, string } from 'prop-types';

class SectionExperience extends PureComponent {
  render() {
    const {
      t,
      experiences
    } = this.props;

    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">
            {t('experience')}
          </h2>
          {
            experiences.map(ex => (
              <div className="resume-item d-flex flex-column flex-md-row mb-5" key={ex}>
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">
                    {t(`${ex}_title`)}
                  </h3>
                  <div className="subheading mb-3">
                    {t(`${ex}_company`)}
                  </div>
                  <p>
                    {t(`${ex}_desc`)}
                  </p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">
                    {t(`${ex}_duration`)}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

SectionExperience.propTypes = {
  t: func.isRequired,
  experiences: arrayOf(string).isRequired
};

export default SectionExperience;

