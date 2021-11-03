import * as React from "react";
import "./styles.css";
import "./PrivacyPolicy.css";
import TermsofUse from "./termsOfUse";
export default () => {
  return (
    <div>
      <div className="footer-prive footer-main-desktops">
        <div className="bg-footer-main">
          <div className="Privacy-Padding">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-lg-4 col-5  mainaddress">
                <div className="address-adjust">
                  {" "}
                  <a href="/">
                    <img
                      className="footer-logo-width"
                      src={require("../assets/bitlabs horizontal logo.png")}
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="address">
                  <p className="footer-address ">
                    TekWorks Enterprise Solutions Pvt Ltd{" "}
                  </p>
                  <p className="footer-address">
                    5th Floor, Sai Odessey, Gurunanak Colony,
                  </p>
                  <p className="footer-address">
                    Vijayawada, Andhra Pradesh - 520008
                  </p>
                  <a href="tel:+919966662524">
                    <p className="footer-address">
                      <i className="fa fa-volume-control-phone phone-style"></i>
                      &nbsp;+91&nbsp;99666&nbsp;62524
                    </p>
                  </a>
                </div>
              </div>
              {/* <div className="col-1"></div> */}
              {/* <div className="col-1"></div> */}
              <div className="col-1 address-hide"></div>
              <div className="col-2 ">
                <p className="p-bottom">
                  {" "}
                  <a href="/#WhybitLabs" className="why-bit-labs-footer">
                    Why bitLabs
                  </a>
                </p>
                <p className="p-bottom">
                  {" "}
                  <a href="/#Howitworks" className="why-bit-labs-footer">
                    How it works
                  </a>
                </p>
                <p className="p-bottom">
                  {" "}
                  <a href="/#Curriculum" className="why-bit-labs-footer">
                    Curriculum
                  </a>
                </p>
                <p className="p-bottom">
                  {" "}
                  <a href="/#Placements" className="why-bit-labs-footer">
                    Placements
                  </a>
                </p>
                <a
                  href="/privacy-policy"
                  className="why-bit-labs-footer grab privacy"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="col-2">
                <p className="p-bottom">
                  {" "}
                  <a href="/#AboutUs" className="why-bit-labs-footer">
                    About Us
                  </a>
                </p>
                <p className="p-bottom">
                  {" "}
                  <a href="/refer-and-earn" className="why-bit-labs-footer">
                    Refer and Earn
                  </a>
                </p>
                <p className="p-bottom">
                  {" "}
                  <a href="/#bitLabsFAQs" className="why-bit-labs-footer">
                    FAQs
                  </a>
                </p>

                <p className="p-bottom">
                  <a
                    href="https://blog.bitlabs.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="why-bit-labs-footer"
                  >
                    Blog
                  </a>
                </p>
                <p className="p-bottom">
                  <a
                    data-toggle="modal"
                    data-target="#extraLargeModal"
                    className="why-bit-labs-footer grab"
                  >
                    Terms of Use
                  </a>
                </p>
              </div>
              <div className="col-2 ">
                <a
                  href="https://www.facebook.com/bitLabs.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="iconimage"
                    src={require("../assets/fb-logo.png")}
                    alt="facebook logo"
                  />
                </a>
                &nbsp; &nbsp;
                <a
                  href="https://twitter.com/BitLabs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="iconimages"
                    src={require("../assets/twitter.png")}
                    alt="Twitter"
                  />
                </a>
                &nbsp; &nbsp;
                <a
                  href=" https://www.youtube.com/channel/UCita18MXyz3diKgEmb-O9Cg?view_as=subscriber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="iconimage"
                    src={require("../assets/youtube-logo.png")}
                    alt="Youtube"
                  />
                </a>
              </div>
              <div className="col-2 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-priv footer-main-mobile">
        <div className="bg-footer-main">
          <div className="footer-padding">
            <div className="row ">
              <div className="col-4 logoset">
                <a href="/#logonav">
                  <img
                    className="footer-logo-width"
                    src={require("../assets/bitlabs horizontal logo.png")}
                    alt="logo"
                  />
                </a>
              </div>
              <div className="col-8 align-images">
                <a
                  href="https://www.facebook.com/bitLabs.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="iconimage"
                    src={require("../assets/fb-logo.png")}
                    alt="facebook logo"
                  />
                </a>
                &nbsp; &nbsp;
                <a
                  href="https://twitter.com/BitLabs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="iconimages"
                    src={require("../assets/twitter.png")}
                    alt="Twitter"
                  />
                </a>
                &nbsp; &nbsp;
                <a
                  href="https://www.youtube.com/channel/UCita18MXyz3diKgEmb-O9Cg?view_as=subscriber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="iconimage"
                    src={require("../assets/youtube-logo.png")}
                    alt="Youtube"
                  />
                </a>
              </div>
            </div>
            <div className="row ">
              <div className="address col-sm-9">
                <p className="footer-address ">
                  TekWorks Enterprise Solutions Pvt Ltd{" "}
                </p>
                <p className="footer-address ">
                  5th Floor,Sai Odessey, Gurunanak Colony
                </p>
                <p className="footer-address ">
                  {" "}
                  Vijayawada,Andhra Pradesh - 520008
                </p>
                <a href="tel:+919966662524">
                  <p className="footer-address">
                    <i className="fa fa-volume-control-phone phone-style"></i>
                    &nbsp;+91&nbsp;99666&nbsp;62524
                  </p>
                </a>
              </div>
            </div>
            <div className="row footer-alignment row-align">
              <div className="col-4 align-center whyb">
                {" "}
                <a href="/#WhybitLabs" className="why-bit-labs-footer ">
                  Why bitLabs
                </a>
              </div>
              <div className="col-4 howi">
                {" "}
                <a href="/#Howitworks" className="why-bit-labs-footer ">
                  How it works
                </a>
              </div>
              <div className="col-4 cur">
                {" "}
                <a href="/#Curriculum" className="why-bit-labs-footer ">
                  Curriculum
                </a>
              </div>
            </div>
            <div className=" row  row-align">
              <div className="col-4 whyb">
                <a href="/#Placements" className="why-bit-labs-footer ">
                  Placements
                </a>
              </div>
              <div className="col-4 howi">
                {" "}
                <a href="/#AboutUs" className="why-bit-labs-footer ">
                  About Us
                </a>
              </div>

              <div className="col-4 cur">
                {" "}
                <a href="/#bitLabsFAQs" className="why-bit-labs-footer">
                  FAQs
                </a>
              </div>
            </div>
            <div className=" row footer-placement row-align">
              <div className="col-4 whyb">
                {" "}
                <a
                  href="https://blog.bitlabs.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="why-bit-labs-footer "
                >
                  Blog
                </a>
              </div>
              <div className="col-4 howi">
                {" "}
                <a
                  data-toggle="modal"
                  data-target="#extraLargeModal"
                  className="why-bit-labs-footer "
                >
                  Terms of Use
                </a>
              </div>
              <div className="col-4 cur">
                {" "}
                <a
                  href="/privacy-policy"
                  className="why-bit-labs-footer privacy "
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer terms */}
      <div className="terms-of-use">
        <div
          id="extraLargeModal"
          className="modal fade"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-body">
                <div className="button-alignment">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <TermsofUse></TermsofUse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
