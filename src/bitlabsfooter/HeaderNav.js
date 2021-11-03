import React, { Component } from "react";
import { PageContent } from "../BitlabsContent";
import "./HeaderNav.css";
const section1 = PageContent.SectionMainHeader;
class PrivacyHeader extends Component{
    render(){
    return (
        <div className="header"id="logonav">
        <div className="responsive-alignment">
          <div className="header-menu">
            <div className="bg-color row">
              <nav className="col-md-11 col-sm-12 col-9 navbar navbar-expand-lg  navbar-light menu-margin  ">
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
                        className="nav-link"
                        href="/#WhybitLabs"
                        className="why-bit-labs"
                      >
                        Why bitLabs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/#Howitworks"
                        className="why-bit-labs"
                      >
                        How it works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/#Curriculum"
                        className="why-bit-labs"
                        onClick={showsalesforce}
                      >
                        Curriculum
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/#Placements"
                        className="why-bit-labs"
                      >
                        Placements
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#bitLabsFAQs" className="why-bit-labs">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/#AboutUs"
                        className="why-bit-labs"
                      >
                        About Us
                      </a>
                    </li>
                    <div className="knowmore-text">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/#KnowMore"
                          className="why-bit-labs"
                        >
                          Learn More
                        </a>
                      </li>
                    </div>
                  </ul>
                  <div className="base-button">
                    <div className="base-button-text">
                      <a className="base" href="/#KnowMore">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
        )}
  }
  function showsalesforce() {
    var $zoho = $zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode:
        "a9cf95fc6c431803172ec203e6cb6057deb568ffa3dc24564beaec2a0144bc36",
      values: {},
      ready: function () {},
    };
  
  }
  export default PrivacyHeader;