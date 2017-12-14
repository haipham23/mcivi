import React, { PureComponent } from 'react';
import { func, arrayOf, string } from 'prop-types';
import TypistLoop from 'react-typist-loop';
import Typist from 'react-typist';

class SectionAbout extends PureComponent {
  render() {
    const {
      t,
      socials
    } = this.props;

    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">
            {t('firstName')}&nbsp;
            <span className="text-primary">
              {t('lastName')}
            </span>
          </h1>
          <div className="subheading mb-5">
            {t('address')}&nbsp;·&nbsp;{t('city')}&nbsp;·&nbsp;{t('country')}&nbsp;·&nbsp;{t('phone')}&nbsp;·&nbsp;
            <a href={`mailto:${t('email')}`}>
              {t('email')}
            </a>
          </div>
          <div className="mb-5 about-me">
            {t('about_me_1')}
            <TypistLoop interval={3000}>
              {
                [
                  'full stack',
                  'web',
                  'javascript',
                  'react'
                ].map(text => (
                  <Typist
                    key={text}
                    startDelay={500}
                    delay={500}
                    cursor={{ show: false }}
                  >
                    <span className="about-me--bold">
                      {text}
                    </span>
                  </Typist>
                ))
              }
            </TypistLoop>
            {t('about_me_2')}
          </div>
          <ul className="list-inline list-social-icons mb-0">
            {
              socials.map(social => (
                <li className="list-inline-item" key={social}>
                  <a href={t(`${social}_url`)} target="_blank">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className={`fa fa-${social} fa-stack-1x fa-inverse`} />
                    </span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    );
  }
}

SectionAbout.propTypes = {
  t: func.isRequired,
  socials: arrayOf(string).isRequired
};

export default SectionAbout;

