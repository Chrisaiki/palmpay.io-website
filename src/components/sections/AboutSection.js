import React from "react";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

// Images
import AboutImage1 from '../../assets/img/about/ab1.png';
import AboutImage2 from '../../assets/img/about/ab2.png';
import AboutImage3 from '../../assets/img/about/ab3.png';
import AboutImage4 from '../../assets/img/about/ab4.png';
import AboutImage5 from '../../assets/img/about/ab5.png';

/**
 * The about section of the home page.
 */
function AboutSection() {
  return (
    <section className="about bg-secondary" id="about">
      <div className="col-md-10 mx-md-auto">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="margin-5">
              <img alt="" className="img-fluid" src={AboutImage1} />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="margin-5">
              <h2 className="about-text">
                <span>
                  <span id="ab_lang1">
                    <FormattedMessage id="home.about.about1_title" />
                  </span>
                </span>
              </h2>
              <p className="about-text">
                <span>
                  <span id="ab_lang2">
                    <FormattedMessage id="home.about.about1_description1" />
                  </span>
                </span>

                <br />
                <span>
                  <span id="ab_lang3">
                    <FormattedMessage id="home.about.about1_description2" />
                  </span>
                </span>

                <br />
                <span>
                  <span id="ab_lang4">
                    <FormattedMessage id="home.about.about1_description3" />
                  </span>
                </span>

                <br />
                <span>
                  <span id="ab_lang5">
                    <FormattedMessage id="home.about.about1_description4" />
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="margin-5">
              <img alt="" className="img-fluid" src={AboutImage2} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="margin-5">
              <h2 className="about-text">
                <span>
                  <span id="ab_lang6">
                    <FormattedMessage id="home.about.about2_title" />
                  </span>
                </span>
              </h2>
              <p className="about-text">
                <span>
                  <span id="ab_lang7">
                    <FormattedMessage id="home.about.about2_description1" />
                  </span>
                </span>
                <br />
                <span>
                  <span id="ab_lang8">
                    <FormattedMessage id="home.about.about2_description2" />
                  </span>
                </span>
                <br />
                <span>
                  <span id="ab_lang9">
                    <FormattedMessage id="home.about.about2_description3" />
                  </span>
                </span>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="margin-5">
              <img alt="" className="img-fluid" src={AboutImage3} />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="margin-5">
              <h2 className="about-text">
                <span>
                  <span id="ab_lang10">
                    <FormattedMessage id="home.about.about3_title" />
                  </span>
                </span>
              </h2>
              <p className="about-text">
                <span>
                  <span id="ab_lang11">
                    <FormattedMessage id="home.about.about3_description1" />
                  </span>
                </span>

                <br />
                <span>
                  <span id="ab_lang12">
                    <FormattedMessage id="home.about.about3_description2" />
                  </span>
                </span>

                <br />
                <span>
                  <span id="ab_lang13">
                    <FormattedMessage id="home.about.about3_description3" />
                  </span>
                </span>

                <br />
                <span>
                  <span id="ab_lang14">
                    <FormattedHTMLMessage id="home.about.about3_description4" />
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="margin-5">
              <img alt="" className="img-fluid" src={AboutImage4} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="margin-5">
              <h2 className="about-text">
                <span>
                  <span id="ab_lang15">
                    <FormattedMessage id="home.about.about4_title" />
                  </span>
                </span>
              </h2>
              <p className="about-text">
                <span>
                  <span id="ab_lang16">
                    <FormattedHTMLMessage id="home.about.about4_description1" />
                  </span>
                </span>
                <br />
                <span>
                  <span id="ab_lang17">
                    <FormattedMessage id="home.about.about4_description2" />
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="margin-5">
              <img alt="" className="img-fluid" src={AboutImage5} />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="margin-5">
              <h2 className="display-5 about-text">
                <span>
                  <span id="ab_lang18">
                    <FormattedMessage id="home.about.about5_title" />
                  </span>
                </span>
              </h2>
              <p className="about-text">
                <span>
                  <span id="ab_lang19">
                    <FormattedMessage id="home.about.about5_description1" />
                  </span>
                </span>

                <br />
                <span>
                  <span id="ab_lang20">
                    <FormattedMessage id="home.about.about5_description2" />
                  </span>
                </span>

                <br />
                <span>
                  <span id="ab_lang21">
                    <FormattedMessage id="home.about.about5_description3" />
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };
