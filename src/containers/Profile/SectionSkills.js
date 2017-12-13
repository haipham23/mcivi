import React, { PureComponent } from 'react';
import { func, arrayOf, string } from 'prop-types';

class SectionSkills extends PureComponent {
  render() {
    const {
      t,
      skills,
      tools,
      flows
    } = this.props;

    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">{t('skills')}</h2>
          <div className="subheading mb-3">{t('pro_lang')}</div>
          <ul className="list-inline list-icons">
            {
              skills.map(skill => (
                <li className="list-inline-item" key={skill}>
                  <i className={`devicons devicons-${skill}`} />
                </li>
              ))
            }
          </ul>

          <div className="subheading mb-3">{t('pro_tool')}</div>
          <ul className="list-inline list-icons">
            {
              tools.map(tool => (
                <li className="list-inline-item" key={tool}>
                  <i className={`devicons devicons-${tool}`} />
                </li>
              ))
            }
          </ul>

          <div className="subheading mb-3">{t('workflow')}</div>
          <ul className="fa-ul mb-0">
            {
              flows.map(flow => (
                <li key={flow}>
                  <i className="fa-li fa fa-check" />
                  {t(`${flow}`)}
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    );
  }
}

SectionSkills.propTypes = {
  t: func.isRequired,
  skills: arrayOf(string).isRequired,
  tools: arrayOf(string).isRequired,
  flows: arrayOf(string).isRequired
};

export default SectionSkills;

