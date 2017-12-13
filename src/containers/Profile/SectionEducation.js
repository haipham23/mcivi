import React, { PureComponent } from 'react';
import { func, arrayOf, string } from 'prop-types';

class SectionEducation extends PureComponent {
  render() {
    const {
      t,
      educations
    } = this.props;

    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">
            {t('education')}
          </h2>
          {
            educations.map(edu => (
              <div className="resume-item d-flex flex-column flex-md-row mb-5" key={edu}>
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">
                    {t(`${edu}_school`)}
                  </h3>
                  <div className="subheading mb-3">
                    {t(`${edu}_degree`)}
                  </div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">
                    {t(`${edu}_duration`)}
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

SectionEducation.propTypes = {
  t: func.isRequired,
  educations: arrayOf(string).isRequired
};

export default SectionEducation;

