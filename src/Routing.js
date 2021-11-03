import React, { Component } from "react";
import "./App.css";
import Header from "./header/index";
import Advantage from "./advantage/index";
import Program from "./bitlabsprogram/index";
import Curriculum from "./cirruculum/index";
import Hirings from "./hiringpartner/index";
import Placements from "./placements/index";
import Journey from "./bitlabsjourney/index";
import Accordian from "./faqaccordian/index";
import Aboutus from "./aboutus/index";
import Teamphotos from "./teamphotos/index";
import Bitlabsfooter from "./bitlabsfooter/index";
import TopScroll from "./topscroll/ScrollToTop";
import { PageContent } from "./BitlabsContent";
import Testimonials from "./testimonials/index";

import "./routingstyles.css";

const section11 = PageContent.section11;

var Fdata = {
  FirstName: "",
  LastName: "",
  Email: "",
  Mobile: "",
  Purpose: "",
};
class MainFunction extends Component {
  constructor(props) {
    super(props);
    this.state = { Purpose: "" };
    this.onformclick = this.onformclick.bind(this);
    this.state = { ...Fdata };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handlePurpose = this.handlePurpose.bind(this);
  }
  onformclick() {
    this.setState({ Purpose: "Get a Course Brochure" });
    console.log(this.state.Purpose, "hi");
  }
  handleEmail(event) {
    this.setState({ Email: event.target.value });
  }
  handleFirstName(event) {
    this.setState({ FirstName: event.target.value });
  }
  handleLastName(event) {
    this.setState({ LastName: event.target.value });
  }
  handleMobile(event) {
    this.setState({ Mobile: event.target.value });
  }
  handlePurpose(event) {
    this.setState({ Purpose: event.target.value });
  }

  submitForm = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source =
      urlParams.get("utm_source") == null
        ? "Website"
        : urlParams.get("utm_source");
    const utm_medium =
      urlParams.get("utm_medium") == null ? "NA" : urlParams.get("utm_medium");
    const utm_campaign =
      urlParams.get("utm_campaign") == null
        ? "none"
        : urlParams.get("utm_campaign");
    const utm_term =
      urlParams.get("utm_term") == null ? "none" : urlParams.get("utm_term");
    const utm_content =
      urlParams.get("utm_content") == null
        ? "none"
        : urlParams.get("utm_content");

    let formData = new FormData();
    formData.append("actionType", "TGVhZHM=");
    formData.append("ldeskuid", "");
    formData.append("zc_gad", "");
    formData.append("LDTuvid", "0d7d4e7f-0ceb-418f-9d6e-83eec6a6e41c-2");
    formData.append("returnURL", "https://www.bitlabs.in/");
    formData.append(
      "xnQsjsdp",
      "839fc5414c05305e4b664871db2fa3bc262ab5a4e7043f26a4f167c600b4a500"
    );
    formData.append(
      "xmIwtLD",
      "50d943a13a8a05ff1cf8f2fe186cb17dd19146c9adc3167a9d612e666b764de2"
    );
    formData.append("First Name", this.state.FirstName);
    formData.append("Last Name", this.state.LastName);
    formData.append("Email", this.state.Email);
    formData.append("Mobile", this.state.Mobile);
    formData.append("LEADCF3", this.state.Purpose);
    formData.append("Lead Source", "WebSite Visit");
    formData.append("LEADCF6", utm_source);
    formData.append("LEADCF7", utm_medium);
    formData.append("LEADCF9", utm_campaign);
    formData.append("LEADCF8", utm_term);
    formData.append("LEADCF10", utm_content);
    var request = new XMLHttpRequest();
    request.open("POST", "https://crm.zoho.com/crm/WebToLeadForm");
    request.send(formData);

    document.getElementById("broucher-link").innerHTML = "";
    document.getElementById("confirmID").innerHTML =
      "Thanks for showing interest in bitLabs!";
    if (this.state.Purpose === "Get a Course Brochure") {
      document.getElementById("broucher-link").innerHTML =
        "Please click here to download the brochure manually.";
      downloadFile();
    }

    trackVisitor();
    var $zoho;
    $zoho = $zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode:
        "a9cf95fc6c431803172ec203e6cb6057deb568ffa3dc24564beaec2a0144bc36",
      values: {},
      ready: function () {},
    };
    var d = document;
    let s = d.createElement("script");
    s.type = "text/javascript";
    s.id = "zsiqscript";
    s.defer = true;
    s.src = "https://salesiq.zoho.com/widget";
    let t = d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);
    function trackVisitor() {
      try {
        if ($zoho) {
          var LDTuvidObj =
            document.forms["WebToLeads4569859000000387001"]["LDTuvid"];
          if (LDTuvidObj) {
            LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
          }
          var firstnameObj =
            document.forms["WebToLeads4569859000000387001"]["First Name"];
          if (firstnameObj) {
            var name = firstnameObj.value + " " + name;
          }
          $zoho.salesiq.visitor.name(name);
          var emailObj =
            document.forms["WebToLeads4569859000000387001"]["Email"];
          if (emailObj) {
            var email = emailObj.value;
            $zoho.salesiq.visitor.email(email);
          }
        }
      } catch (e) {}
    }
    document.getElementById("FirstName").value = "";
    document.getElementById("LastName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Mobile").value = "";
    document.getElementById("LEADCF3").value = "";
    // });
    this.setState({ ...Fdata });
  };
  render() {
    return (
      <div className="App">
        <Header></Header>
        <TopScroll></TopScroll>
        <Advantage></Advantage>
        <Program></Program>
        <Testimonials />
        <Curriculum onForm={this.onformclick}></Curriculum>
        <Journey></Journey>
        <Hirings></Hirings>
        <Accordian></Accordian>
        <Aboutus></Aboutus>
        <Teamphotos></Teamphotos>
        <Placements></Placements>
        <div className="form-main" id="KnowMore">
          <div className="bag-form-main">
            <div className="padding-top ">
              <div className="row row-align">
                <div className="col-md-4 col-sm-8">
                  {" "}
                  <img
                    className=" form-height"
                    src={require("./assets/contact.png")}
                    alt="contact"
                  />
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <div className="col-md-6 col-sm-12 ">
                  <p className="take-a-step-towards">{section11.title}</p>
                  <div>
                    <form
                      name="WebToLeads4569859000000387001"
                      onSubmit={this.submitForm}
                    >
                      <input
                        type="text"
                        name="xnQsjsdp"
                        style={{ display: "none" }}
                        defaultValue="839fc5414c05305e4b664871db2fa3bc262ab5a4e7043f26a4f167c600b4a500"
                      ></input>{" "}
                      <input
                        type="hidden"
                        name="zc_gad"
                        id="zc_gad"
                        defaultValue=""
                        style={{ display: "none" }}
                      ></input>{" "}
                      <input
                        type="text"
                        style={{ display: "none" }}
                        name="xmIwtLD"
                        defaultValue="50d943a13a8a05ff1cf8f2fe186cb17dd19146c9adc3167a9d612e666b764de2"
                      ></input>{" "}
                      <input
                        type="text"
                        style={{ display: "none" }}
                        name="actionType"
                        defaultValue="TGVhZHM="
                      ></input>
                      <input
                        type="text"
                        style={{ display: "none" }}
                        name="returnURL"
                        value="http://www.bitlabs.in"
                      ></input>
                      <input
                        type="text"
                        style={{ display: "none" }}
                        id="LDTuvid"
                        name="LDTuvid"
                      ></input>
                      <input
                        type="text"
                        style={{ display: "none" }}
                        id="ldeskuid"
                        name="ldeskuid"
                      ></input>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          name="FirstName"
                          maxLength="40"
                          id="FirstName"
                          value={this.state.FirstName}
                          onChange={this.handleFirstName}
                          required
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          name="LastName"
                          maxLength="80"
                          id="LastName"
                          value={this.state.LastName}
                          onChange={this.handleLastName}
                          required
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          ftype="email"
                          placeholder="Email"
                          name="Email"
                          maxLength="100"
                          id="Email"
                          value={this.state.Email}
                          onChange={this.handleEmail}
                          required
                          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile"
                          name="Mobile"
                          id="Mobile"
                          maxLength="10"
                          minLength="10"
                          value={this.state.Mobile}
                          onChange={this.handleMobile}
                          required
                        />
                      </div>
                      <div className="form-group dropdown">
                        <span className="take-a-step-towards-lucky-draw">
                          I want to:
                        </span>
                        <select
                          className="form-control"
                          name="Purpose"
                          value={this.state.Purpose}
                          onChange={this.handlePurpose}
                          required
                          id="LEADCF3"
                        >
                          <option value="" disabled>
                            Select One
                          </option>
                          <option value="Speak To a Student Advisor">
                            Speak To a Student Advisor
                          </option>
                          <option value="Get a Course Brochure">
                            Get a Course Brochure
                          </option>
                          <option value="Request a Trial">
                            Request a Trial
                          </option>
                          <option value="Know More About Guaranteed Interviews">
                            Know More About Guaranteed Interviews
                          </option>
                          <option value="Know The Pricing Details">
                            Know The Pricing Details
                          </option>
                        </select>
                      </div>
                      <div className="button-send">
                        <button
                          className="btn-bitlabs"
                          id="formsubmit"
                          type="submit"
                          value="Submit"
                        >
                          <span className="send">SEND</span>
                        </button>
                      </div>
                    </form>
                    <span className="confirmID-message" id="confirmID"></span>
                    <br />
                    <a
                      className="confirmID-download broucherPointer"
                      onClick={downloadFile}
                      id="broucher-link"
                      href
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Bitlabsfooter></Bitlabsfooter>
      </div>
    );
  }
}
function downloadFile() {
  var link = document.createElement("a");
  document.body.appendChild(link);
  const src = require("./assets/broucher.pdf");
  link.href = src;
  link.download = "Bitlabs online curriculum doc.pdf";
  link.click();
}

export default MainFunction;
