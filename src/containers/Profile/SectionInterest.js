import React, { PureComponent } from 'react';
import { func } from 'prop-types';

class SectionInterest extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div className="my-auto">
          <h2 className="mb-5">
            {t('interest')}
          </h2>
          <p>
            {t('interest_p1')}
          </p>
          <p className="mb-0">
            {t('interest_p2')}
          </p>
        </div>
      </section>
    );
  }
}

SectionInterest.propTypes = {
  t: func.isRequired
};

export default SectionInterest;

