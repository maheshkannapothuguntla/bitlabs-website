import React, { Component } from "react";
import "./style.css";
import Footer from "../bitlabsfooter/PrivacyFooter";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section1 = PageContent.SectionMainHeader;
const Fdata = {
  FirstName: "",
  LastName: "",
  Email: "",
  Mobile: "",
  Purpose: "",
};
class luckydrawn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...Fdata };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handlePurpose = this.handlePurpose.bind(this);
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
    // utm_source=sms&utm_medium=web&utm_campaign=camp&utm_term=term&utm_content=cont
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source =
      urlParams.get("utm_source") == null
        ? "Lucky-Draw"
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
    formData.append("returnURL", "https://www.bitlabs.in");
    //formData.append('returnURL', 'http://bitlabs.symphonize.net')
    formData.append(
      "xmIwtLD",
      "50d943a13a8a05ff1cf8f2fe186cb17dfb202585b45b5e5aa442c03a5c58c68a"
    );
    formData.append(
      "xnQsjsdp",
      "839fc5414c05305e4b664871db2fa3bc262ab5a4e7043f26a4f167c600b4a500"
    );
    formData.append("First Name", this.state.FirstName);
    formData.append("Last Name", this.state.LastName);
    formData.append("Email", this.state.Email);
    formData.append("Mobile", this.state.Mobile);
    formData.append("LEADCF4", this.state.Purpose);
    formData.append("Lead Source", "Flyer");
    formData.append("LEADCF6", utm_source);
    formData.append("LEADCF7", utm_medium);
    formData.append("LEADCF9", utm_campaign);
    formData.append("LEADCF8", utm_term);
    formData.append("LEADCF10", utm_content);
    var request = new XMLHttpRequest();
    request.open("POST", "https://crm.zoho.com/crm/WebToLeadForm");
    request.send(formData);
    document.getElementById("confirmID-1").innerHTML =
      "Thanks for your submission!";
    document.getElementById("confirmID-2").innerHTML =
      "You have now entered our lucky draw. Good luck!";
    trackVisitor();
    var $zoho = $zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode:
        "a9cf95fc6c431803172ec203e6cb6057deb568ffa3dc24564beaec2a0144bc36",
      values: {},
      ready: function () {
        $zoho.salesiq.floatbutton.visible("hide");
      },
    };
    var d = document;
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.id = "zsiqscript";
    s.defer = true;
    s.src = "https://salesiq.zoho.com/widget";
    var t = d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);
    function trackVisitor() {
      try {
        if ($zoho) {
          var LDTuvidObj =
            document.forms["WebToLeads4569859000001672023"]["LDTuvid"];
          if (LDTuvidObj) {
            LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
          }
          var firstnameObj =
            document.forms["WebToLeads4569859000001672023"]["First Name"];
          if (firstnameObj) {
            var name = firstnameObj.value + " " + name;
          }
          $zoho.salesiq.visitor.name(name);
          var emailObj =
            document.forms["WebToLeads4569859000001672023"]["Email"];
          if (emailObj) {
            var email = emailObj.value;
            $zoho.salesiq.visitor.email(email);
          }
        }
      } catch (e) {}
    }

    document.getElementById("First_Name").value = "";
    document.getElementById("Last_Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Mobile").value = "";
    document.getElementById("LEADCF4").value = "";
    this.setState({ ...Fdata });
  };
  render() {
    return (
      <div className="privacy-whole">
        <div className=" privacy-back ">
          <div className=" Privacy-header  row ">
            <div className="AutoAdjust">
              <div className="Privacy-logo ">
                <a href="/">
                  <img
                    src={require("../assets/bitlabs horizontal logo.png")}
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form-main-drawn lucky-draw-responsive">
          <div className="bag-form-main">
            <div className="lucky-draw-form-body">
              <div className="">
                <div className="">
                  <span className="header-text">
                    {section1.title1}
                    <span className="text-multicolor">
                      {" "}
                      {section1.title1Cont}
                    </span>
                  </span>
                </div>
                <div className="row row-align spacebetween-jobready">
                  <div className="col-md-4 col-sm-8 form-image image-lucky-draw">
                    {" "}
                    <img
                      className=" form-height"
                      src={require("../assets/contact.png")}
                      alt="contact"
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <p className="take-a-step-towards-draw">
                      Please provide your details to enter our lucky draw. The
                      lucky winner will get Rs. 250/-
                    </p>
                    <div>
                      <form
                        name="WebToLeads4569859000001672023"
                        onSubmit={this.submitForm}
                      >
                        <input
                          type="text"
                          name="xnQsjsdp"
                          style={{ display: "none" }}
                          value="839fc5414c05305e4b664871db2fa3bc262ab5a4e7043f26a4f167c600b4a500"
                        ></input>{" "}
                        <input
                          type="hidden"
                          name="zc_gad"
                          id="zc_gad"
                          value=""
                          style={{ display: "none" }}
                        ></input>{" "}
                        <input
                          type="text"
                          style={{ display: "none" }}
                          name="xmIwtLD"
                          value="50d943a13a8a05ff1cf8f2fe186cb17dfb202585b45b5e5aa442c03a5c58c68a"
                        ></input>{" "}
                        <input
                          type="text"
                          style={{ display: "none" }}
                          name="actionType"
                          value="TGVhZHM="
                        ></input>
                        <input
                          type="text"
                          style={{ display: "none" }}
                          name="returnURL"
                          value="https://www.bitlabs.in/"
                        ></input>
                        <input
                          type="text"
                          style={{ display: "none" }}
                          id="ldeskuid"
                          name="ldeskuid"
                        ></input>
                        <input
                          type="text"
                          style={{ display: "none" }}
                          id="LDTuvid"
                          name="LDTuvid"
                        ></input>
                        <div className="form-group ">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="FirstName"
                            maxLength="40"
                            id="First_Name"
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
                            id="Last_Name"
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
                        <div className="form-group lucky-dropwn">
                          <select
                            class="form-control"
                            name="LEADCF4"
                            value={this.state.Purpose}
                            onChange={this.handlePurpose}
                            required
                            id="LEADCF4"
                          >
                            {/* <option value="" >Select one</option> */}

                            <option value="" disabled>
                              Select One
                            </option>
                            <option value="Student" selected>
                              Student
                            </option>
                            <option value="Parent">Parent</option>
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
                    </div>
                    <div className="">
                      <span
                        className="confirmID-message-draw"
                        id="confirmID-1"
                      ></span>
                      <br></br>
                      <span
                        className="confirmID-message-draw"
                        id="confirmID-2"
                      ></span>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
var $zoho;
$zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
  widgetcode:
    "a9cf95fc6c431803172ec203e6cb6057deb568ffa3dc24564beaec2a0144bc36",
  values: {},
  ready: function () {},
};
export default luckydrawn;
