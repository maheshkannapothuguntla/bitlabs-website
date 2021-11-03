import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const section1 = PageContent.SectionMainHeader;


export default () => { 
  return (
    <div className="headermain" id="logonav">
      <div className="responsive-alignment">
        <div className="headermain-menu ">
          <div className="bg-color row">
            <nav className="col-md-11 col-sm-12 col-9 navbar navbar-expand-lg  navbar-light menu-margin ">
              <div className="image-logo-alignments">
                <img
                  src={require("../assets/bitlabs horizontal logo.png")}
                  alt="logo"
                  className="logo-image"
                />
              </div>
              <button
                className="navbar-toggler top-view"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse menumargin-top"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a
                     
                      href="#WhybitLabs"
                      className="why-bit-labs"
                    >
                      Why bitLabs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                     
                      href="#Howitworks"
                      className="why-bit-labs"
                    >
                      How it works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                  
                      href="#Curriculum"
                      className="why-bit-labs"
                      onClick={showsalesforce}
                    >
                      Curriculum
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                     
                      href="#Placements"
                      className="why-bit-labs"
                    >
                      Placements
                    </a>
                  </li>
                  <li className="nav-item">
                    <a  href="#bitLabsFAQs" className="why-bit-labs">
                      FAQs
                    </a>
                  </li>
                  
                  <li className="nav-item">
                    <a
                     
                      href="#AboutUs"
                      className="why-bit-labs"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://blog.bitlabs.in/" target="_blank" rel="noopener noreferrer"
                       className="why-bit-labs">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/refer-and-earn"  rel="noopener noreferrer"
                       className="why-bit-labs">
                      Refer and Earn
                    </a>
                  </li>
                  <div className="knowmore-text">
                    <li className="nav-item">
                      <a
                      
                        href="tel:+919966662524"
                        className="why-bit-labs"
                      >
                        <span className="logo-phone-navbar">
                        <i className="fa fa-volume-control-phone phone-style"></i>
                       </span>
                         &nbsp;+91&nbsp;99666&nbsp;62524
                      </a>
                    </li>
                  </div>
                </ul>
                <div className="base-button">
                  <div className="base-button-text">
                    <a className="base" href="tel:+919966662524">
                      <span className="phone-image">
                      <i className="fa fa-volume-control-phone phone-style"></i>
                </span>
                    &nbsp;+91&nbsp;99666&nbsp;62524
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="headermain-top">
            <span className="header-text">
              {section1.title1}
              <span className="text-multicolor"> {section1.title1Cont}</span>
            </span>

            <Carousel autoPlay showThumbs={false} showArrows={false} showIndicators={false} infiniteLoop={true} showStatus={false} interval={6000} transitionTime={2500}>
                <p className="button-subtext">{section1.subTitle}</p>
               <p className="button-subtext">{section1.subTitle1}</p>
               </Carousel>
            <div className="button-padding">
              <a href="#KnowMore">
                <button className="header-button">
                  <span className="waitlist">LEARN MORE</span>
                </button>
              </a>
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
};
function showsalesforce() {
  var $zoho;
   $zoho = $zoho || {};
  $zoho.salesiq = $zoho.salesiq || {
    widgetcode:
      "a9cf95fc6c431803172ec203e6cb6057deb568ffa3dc24564beaec2a0144bc36",
    values: {},
    ready: function () {},
  };
}
