import React, { Component} from "react";
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
  clgName: "",
  dob: new Date(),
  gender: "",
  city: "",
  state: "",
  country: "",
  zipcode:"",
  parentName: "",
  occupation: "",
  income: "",
  cert: "",
  exms: "",
  specalization: "",
  grad: "",
  deglvl: "",
  semMarks: "",
  yop: "",
  wrkDtls: "",
  wrkYears: "",
  certDtls: "",
  exmsDtls: "",
  street:"",
  ssc:"",
  interScore:"",
  degScore:"",
};

class registration extends Component {
  constructor(props) {
    super(props);
    this.state = { ...Fdata };
    this.state = {
      formDrive: false,
      formRegister: false,
      naCert: false,
      exam: false,
      graduate:false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleDob = this.handleDob.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleClgName = this.handleClgName.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleStreet=this.handleStreet.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleParentNme = this.handleParentNme.bind(this);
    this.handleParentOccupation = this.handleParentOccupation.bind(this);
    this.handleEduQual = this.handleEduQual.bind(this);
    this.handleSpecalization = this.handleSpecalization.bind(this);
    this.handleDegreeLevel = this.handleDegreeLevel.bind(this);
    this.handleSemMarks = this.handleSemMarks.bind(this);
    this.handleYearofPass = this.handleYearofPass.bind(this);
    this.handleExpDtls = this.handleExpDtls.bind(this);
    this.handleExpYears = this.handleExpYears.bind(this);
    this.handleIncome = this.handleIncome.bind(this);
    this.handleCertifications = this.handleCertifications.bind(this);
    this.handleExams = this.handleExams.bind(this);
    this.handleExamsDtls = this.handleExamsDtls.bind(this);
    this.handleCertificationsDtls = this.handleCertificationsDtls.bind(this);
    this.setDateFormat = this.setDateFormat.bind(this);
    this.handleSSC=this.handleSSC.bind(this);
    this.handleIntermediate=this.handleIntermediate.bind(this);
    this.handleDegreeScore=this.handleDegreeScore.bind(this);
    this.handleZipcode=this.handleZipcode.bind(this);
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
  handleDob(event) {
    this.setState({ dob: event.target.value });
  }
  handleGender(event) {
    this.setState({ gender: event.target.value });
  }
  handleClgName(event) {
    this.setState({ clgName: event.target.value });
  }
  handleStreet(event){
    this.setState({ street: event.target.value });
  }
  handleCity(event) {
    this.setState({ city: event.target.value });
  }
  handleState(event) {
    this.setState({ state: event.target.value });
  }
  handleCountry(event) {
    this.setState({ country: event.target.value });
  }
  handleParentNme(event) {
    this.setState({ parentName: event.target.value });
  }
  handleParentOccupation(event) {
    this.setState({ occupation: event.target.value });
  }
  handleIncome(event) {
    this.setState({ income: event.target.value });
  }
  handleEduQual(event) {
    this.setState({ grad: event.target.value });
  }
  handleSpecalization(event) {
    this.setState({ specalization: event.target.value });
  }
  handleDegreeLevel(event) {
    this.setState({ deglvl: event.target.value });
  }
  handleSemMarks(event) {
    this.setState({ semMarks: event.target.value });
  }
  handleYearofPass(event) {
    this.setState({ yop: event.target.value });
  }
  handleExpYears(event) {
    this.setState({ wrkYears: event.target.value });
  }
  handleExpDtls(event) {
    this.setState({ wrkDtls: event.target.value });
  }
  handleCertifications(event) {
    this.setState({ cert: event.target.value });
  }
  handleExams(event) {
    this.setState({ exms: event.target.value });
  }
  handleExamsDtls(event) {
    this.setState({ exmsDtls: event.target.value });
  }
  handleCertificationsDtls(event) {
    this.setState({ certDtls: event.target.value });
  }
  handleZipcode(event){
    this.setState({ zipcode: event.target.value });
  }
  handleSSC(event){
    this.setState({ ssc: event.target.value });
  }
  handleIntermediate(event){
    this.setState({ interScore: event.target.value });
  }
  handleDegreeScore(event){
    this.setState({ degScore: event.target.value });
  }
  setDateFormat(date) {
    let today = new Date(date);
    // console.log(today.getMonth().toString(), (today.getMonth() + 1).toString(), (today.getMonth() + 1).toString().length ,((today.getMonth() + 1).toString().length == 1) )
    let day = (today.getDate().toString().length === 1) ? "0" + today.getDate().toString() + "" : today.getDate().toString() + "";
    let month = ((today.getMonth() + 1).toString().length === 1) ? "0" + (today.getMonth() + 1).toString() + "" : (today.getMonth() + 1) + "";
    let year = (today.getFullYear().toString().length === 1) ? "0" + today.getFullYear().toString() + "" : today.getFullYear().toString() + "";
    // console.log(day + "-" + month + "-" + year);
    // return (day + "-" + month + "-" + year);
     return (day + "/" + month + "/" + year);
  }
  componentDidMount() {
    const searchparams = new URLSearchParams(window.location.search);
    const params =
      searchparams.get("lpr") === null ? "none" : searchparams.get("lpr");
    const campusParams =
      searchparams.get("utm_campaign") == null
        ? "none"
        : searchparams.get("utm_campaign");
    
    if (
      campusParams.toLowerCase() === "campusdrive" ||
      params.toLowerCase() === "" ||
      campusParams.toLowerCase() === ""
    ) {
      this.setState({ formDrive: true });
     
    } else if (params.toLowerCase()=== "apply") {
      this.setState({ formRegister: true });
     
    }
  }

  blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  GetHeaderText() {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("lpr") === null ? "none" : urlParams.get("lpr");
    const campusParams =
      urlParams.get("utm_campaign") === null
        ? "none"
        : urlParams.get("utm_campaign");
    if (campusParams.toLowerCase() === "campusdrive") {
      return (
        <p className="take-a-step-towards-draw">
          {/* Please provide your details for your upcoming campus drive. Limited
          seats..so register now! */}
          Are you ready to make a difference? Do you have what it takes to join
          a fast-paced company with a start-up culture?
          <br />
          We are coming to your college to have the brightest minds join our
          bitLabs family. Register for campus drive below.
        </p>
      );
    }
    if (campusParams.toLowerCase() ==="" || source.toLowerCase() === "") {
      return (
        <p className="take-a-step-towards-draw">
          Please enter the below details. Our student advisor will get in touch
          with you.
        </p>
      );
    }
    if (source.toLowerCase() === "apply") {
      return (
        <p className="take-a-step-towards-draw">
          {/* Please provide your details for your upcoming campus drive. Limited
          seats..so register now! */}
          Thank you for your interest in the bitLabs program. As a prospective
          learner, we would like to know you better. Fill out your details.
        </p>
      );
    }
  }


  submitForm = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const utm_source =
      urlParams.get("utm_source") === null
        ? "Lucky-Draw"
        : urlParams.get("utm_source");

    const utm_medium =
      urlParams.get("utm_medium") === null ? "NA" : urlParams.get("utm_medium");
    const utm_campaign =
      urlParams.get("utm_campaign") === null
        ? "none"
        : urlParams.get("utm_campaign");
    const utm_term =
      urlParams.get("utm_term") === null ? "none" : urlParams.get("utm_term");
    const utm_content =
      urlParams.get("utm_content") === null
        ? "none"
        : urlParams.get("utm_content");
    const lpr = urlParams.get("lpr") === null ? "none" : urlParams.get("lpr");

    let formData = new FormData();
    formData.append("actionType", "TGVhZHM=");
    formData.append("ldeskuid", "");
    formData.append("zc_gad", "");
    formData.append("LDTuvid", "0d7d4e7f-0ceb-418f-9d6e-83eec6a6e41c-2");
    formData.append("returnURL", "https://www.bitlabs.in");
    //formData.append('returnURL', 'http://bitlabs.symphonize.net')

    formData.append(
      "xnQsjsdp",
      "839fc5414c05305e4b664871db2fa3bc262ab5a4e7043f26a4f167c600b4a500"
    );
   
    if (lpr.toLowerCase() === ""|| utm_campaign.toLowerCase()==="campusdrive") {
      formData.append("First Name", this.state.FirstName);
      //     formData.append("First Name", this.state.FirstName);
      formData.append(
        "xmIwtLD",
        "50d943a13a8a05ff1cf8f2fe186cb17d64cce6741668b57221c6f9cd9bc6497e"
      );
      formData.append("Last Name", this.state.LastName);
      
      formData.append("Email", this.state.Email);
      formData.append("Mobile", this.state.Mobile);
      formData.append("LEADCF11", this.state.clgName);
    }
    if(utm_campaign.toLowerCase()==="campusdrive")
    {
    formData.append("Lead Source", "Campus Drive");
    }
    if(lpr.toLowerCase() === "")
    {
    formData.append("Lead Source", "External Referral");
    }
    if (lpr.toLowerCase() === "apply") {
      formData.append(
        "xmIwtLD",
        "50d943a13a8a05ff1cf8f2fe186cb17d64cce6741668b57221c6f9cd9bc6497e"
        // "50d943a13a8a05ff1cf8f2fe186cb17dfb202585b45b5e5aa442c03a5c58c68a"
      );
      formData.append("First Name", this.state.FirstName);
      formData.append("Last Name", this.state.LastName);
      formData.append("LEADCF15", this.state.gender);
      formData.append("LEADCF81", this.setDateFormat(this.state.dob));
      formData.append("Email", this.state.Email);
      formData.append("Mobile", this.state.Mobile);
      formData.append("Street",this.state.street);
      formData.append("City", this.state.city);
      formData.append("State", this.state.state);
      formData.append("Country", this.state.country);
      formData.append("Zip_Code",this.state.zipcode)
      formData.append("LEADCF18", this.state.parentName);
      formData.append("LEADCF17", this.state.occupation);
      formData.append("LEADCF20", this.state.income);
      formData.append("LEADCF19", this.state.cert );
      formData.append("LEADCF25", this.state.exms);
      formData.append("LEADCF12", this.state.grad);
      formData.append("LEADCF11", this.state.clgName);
      formData.append("LEADCF14", this.state.specalization);
      formData.append("LEADCF22", this.state.deglvl);
      formData.append("LEADCF21", this.state.semMarks);
      formData.append("LEADCF16", this.state.yop);
      formData.append("LEADCF26", this.state.wrkYears);
      formData.append("LEADCF23", this.state.wrkDtls);
      formData.append("LEADCF28",this.state.ssc)
      formData.append("LEADCF30", this.state.interScore);
      formData.append("LEADCF31", this.state.degScore);
      
      if (this.state.certDtls === undefined) {
        this.state.exmsDtls = '';
      }
      formData.append("LEADCF24", this.state.certDtls);
      if (this.state.exmsDtls === undefined) {
        this.state.exmsDtls = '';
      }
      formData.append("LEADCF27", this.state.exmsDtls);

      formData.append("Lead Source", "Register");
    }

    formData.append("LEADCF6", utm_source);
    formData.append("LEADCF7", utm_medium);
    formData.append("LEADCF9", utm_campaign);
    formData.append("LEADCF8", utm_term);
    formData.append("LEADCF10", utm_content);
    var request = new XMLHttpRequest();
    request.open("POST", "https://crm.zoho.com/crm/WebToLeadForm");
    request.send(formData);
    if (this.state.formDrive === true) {
      document.getElementById("confirmID-1").innerHTML =
       
        "Thanks for registering for the campus drive.";
      
    }
    if (this.state.formDrive === true && (lpr.toLowerCase() === "" || utm_campaign.toLowerCase() === "")) {
      document.getElementById("confirmID-1").innerHTML =
      
      "Thank you for showing interest in bitLabs job ready program.";
    }
    if (this.state.formRegister === true) {
      document.getElementById("confirmID-1").innerHTML =
        // "Thank you for your application. As the final step of the process, our student advisor will contact you shortly. Get ready to get started!";
        "Thank you for submitting your details. Good luck for a bright future with bitLabs!";
    }
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
    //null
    document.getElementById("First_Name").value = "";
    document.getElementById("Last_Name").value = "";
    // document.getElementById("Email").value = "";
    // document.getElementById("Mobile").value = "";
    document.getElementById("LEADCF11").value = "";
    this.setState({ ...Fdata });
    this.setState({exam:false})
  };
  handleDate(e) {
    e.currentTarget.type = "date";
  }
  blurDate(e) {
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "DOB (DD/MM/YYYY)";
  }
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
        <div className="form-main-drawn ">
          {/* lucky-draw-responsive */}
          <div className="bag-form-main">
            <div className="lucky-draw-form-body">
              <div className="">
                {this.state.formDrive === true && (
                  <div className="">
                    <span className="header-text">
                      {section1.title2}
                      <span className="text-multicolor">
                        {" "}
                        {section1.title2Cont}
                      </span>
                    </span>
                  </div>
                )}
                {this.state.formRegister === true && (
                  <div className="">
                    <span className="header-text">
                      {section1.title3}
                      <span className="text-multicolor">
                        {" "}
                        {section1.title3Cont}
                      </span>
                    </span>
                  </div>
                )}
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
                    {this.GetHeaderText()}
                    <div>
                      <form
                        name="WebToLeads4569859000001672023"
                        onSubmit={this.submitForm}
                      >
                        {" "}
                        {this.state.formDrive && (
                          <div>
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
                            <br />
                            <div className="form-group ">
                              <input
                                type="text"
                                placeholder="College Name"
                                class="form-control"
                                name="LEADCF11"
                                value={this.state.clgName}
                                onChange={this.handleClgName}
                                required
                                id="LEADCF11"
                              />
                            </div>
                            <br />
                          </div>
                        )}
                   
                        {this.state.formRegister && (
                          <div>
                            <p className="reg-head"> Personal Information:</p>
                            <div className=" row ">
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-controls"
                                    placeholder="First Name"
                                    id="First_Name"
                                    name="First Name"
                                    maxlength="40"
                                    value={this.state.FirstName}
                                    onChange={this.handleFirstName}
                                    required
                                  />
                                </div>
                                <br />
                              </div>
                              <div className="col-md-6 col-sm-12 ">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-controls"
                                    placeholder="Last Name"
                                    id="Last_Name"
                                    name="Last Name"
                                    maxlength="80"
                                    value={this.state.LastName}
                                    onChange={this.handleLastName}
                                    required
                                  />
                                </div>
                                <br />
                              </div>
                              {/* </div>
                              <div className=" row "> */}
                              <div className="col-md-6 col-sm-12  mb-0">
                                {/* <th>Date of Birth</th> */}
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-controls"
                                    id="LEADCF81"
                                    name="LEADCF81"
                                    maxlength="20"
                                    required
                                    onChange={this.handleDob}
                                    placeholder="DOB(DD/MM/YYYY)"
                                    onFocus={this.handleDate}
                                    onBlur={this.handleDob}
                                    
                                    value={this.state.dob}
                                  />
                                </div>
                                <br />
                              </div>
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <select
                                    class="form-controls"
                                    id="LEADCF15"
                                    name="LEADCF15"
                                    required
                                    onChange={this.handleGender}
                                    value={this.state.gender}
                                  >
                                    <option value="" disabled selected>
                                      Gender
                                    </option>
                                    {/* <option value="-None-">-None-</option> */}
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                  <br />
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    class="form-controls"
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
                              </div>
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    class="form-controls"
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
                                <br />
                              </div>
                              {/* </div>
                              <div className=" row "> */}
                               <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id='Street' name='Street'
                                    maxlength="100"
                                    className="form-controls"
                                    placeholder="D.No & Street"
                                    onChange={this.handleStreet}
                                    required
                                    value={this.state.street}
                                  />
                                  <br />
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="City"
                                    name="City"
                                    maxlength="100"
                                    className="form-controls"
                                    placeholder="City"
                                    onChange={this.handleCity}
                                    required
                                    value={this.state.city}
                                  />
                                  <br />
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="State"
                                    name="State"
                                    maxlength="100"
                                    className="form-controls"
                                    placeholder="State"
                                    onChange={this.handleState}
                                    required
                                    value={this.state.state}
                                  />
                                </div>
                                <br />
                              </div>
                              {/* </div>
                              <div className="row"> */}
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="Country"
                                    name="Country"
                                    maxlength="100"
                                    className="form-controls"
                                    placeholder="Country"
                                    onChange={this.handleCountry}
                                    required
                                    value={this.state.country}
                                  />
                                </div>
                                <br />
                              </div>
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="number"
                                    id='Zip_Code' name='Zip Code'
                                    maxlength="100"
                                    className="form-controls"
                                    placeholder="Zip Code"
                                    onKeyDown={this.blockInvalidChar}
                                    onChange={this.handleZipcode}
                                    required
                                    value={this.state.zipcode}
                                  />
                                </div>
                                <br />
                              </div>
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="LEADCF18"
                                    name="LEADCF18"
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="Father's Name"
                                    required
                                    onChange={this.handleParentNme}
                                    value={this.state.parentName}
                                  />
                                </div>
                                <br />
                              </div>
                            
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="LEADCF17"
                                    name="LEADCF17"
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="Occupation of Parent/Guardian"
                                    required
                                    onChange={this.handleParentOccupation}
                                    value={this.state.occupation}
                                  />
                                </div>
                                <br />
                              </div>

                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <select
                                    className="form-controls"
                                    id="LEADCF20"
                                    name="LEADCF20"
                                    required
                                    onChange={this.handleIncome}
                                    value={this.state.income}
                                  >
                                    <option value="" selected disabled>
                                      Annual Income
                                    </option>
                                    <option value="0-2&#x20;lacs">
                                      0-2 lacs
                                    </option>
                                    <option value="2-5&#x20;lacs">
                                      2-5 lacs
                                    </option>
                                    <option value="5-10&#x20;lacs">
                                      5-10 lacs
                                    </option>
                                    <option value="10-15&#x20;lacs">
                                      10-15 lacs
                                    </option>
                                    <option value="&gt;15&#x20;lacs">
                                      &gt;15 lacs
                                    </option>
                                  </select>
                                </div>
                                <br />
                              </div>

                             

                              


                              <div className="col-md-6 col-sm-12  mb-0 field_align_ment1">
                                <div className="form-group">
                                  <select
                                    className="form-controls "
                                    id="LEADCF19"
                                    name="LEADCF19"
                                    required
                                    onChange={this.handleCertifications}
                                    value={this.state.cert}
                                  >
                                    <option value="" selected disabled>
                                      Any Certifications
                                    </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                                <br />
                              </div>

                              <div className="col-md-6 col-sm-12  mb-0 field_align_ment3">
                                <div className="form-group">
                                  <select
                                    className="form-controls "
                                    id="LEADCF25"
                                    name="LEADCF25"
                                    required
                                    value={this.state.exms}
                                   
                                    onChange={(e) => {
                                      this.handleExams(e);
                                      console.log(e.target.value);
                                      this.setState({
                                        exam: ((e.target.value !== "") && (e.target.value !=="No")),
                                      });
                                     
                                    }}
                                  >
                                    <option value="" selected disabled>
                                      Have you appeared for GRE,GMAT,CAT or GATE
                                    </option>
                                    <option value="No">No</option>
                                    <option value="GMAT">GMAT</option>
                                    <option value="CAT">CAT</option>
                                    <option value="GRE">GRE</option>
                                    <option value="GATE">GATE</option>
                                  </select>
                                </div>
                                <br />
                              </div>
                              {this.state.cert === "Yes" && (
                                <div className="col-md-6 col-sm-12 mb-0 field_align_ment2">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      id="LEADCF24"
                                      name="LEADCF24"
                                      maxlength="255"
                                      className="form-controls"
                                      placeholder="Please enter your certifications"
                                      required
                                      onChange={this.handleCertificationsDtls}
                                      value={this.state.certDtls}
                                    />
                                  </div>
                                  <br />
                                </div>
                              )}
                              {this.state.exam && (
                                <div className="col-md-6 col-sm-12  mb-0 field_align_ment4">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      id="LEADCF27"
                                      name="LEADCF27"
                                      maxlength="255"
                                      className="form-controls"
                                      placeholder="Please enter your score"
                                      required
                                      onChange={this.handleExamsDtls}
                                      value={this.state.exmsDtls}
                                    />
                                  </div>
                                  <br />
                                </div>
                              )}
                            </div>
                            <p className="reg-head">
                              Educational Qualifications:
                            </p>
                            <div className="row">
                            <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="number"
                                    id='LEADCF28' name='LEADCF28'
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="SSC CGPA"
                                    required
                                    onKeyDown={this.blockInvalidChar}
                                    onChange={this.handleSSC}
                                    value={this.state.ssc}
                                  />
                                </div>
                                <br />
                              </div> 

                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="number"
                                    id='LEADCF30' name='LEADCF30'
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="Intermediate Score"
                                    required
                                    onKeyDown={this.blockInvalidChar}
                                    onChange={this.handleIntermediate}
                                    value={this.state.interScore}
                                  />
                                </div>
                                <br />
                              </div>
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <select
                                    className="form-controls"
                                    id="LEADCF12"
                                    name="LEADCF12"
                                    required
                                    onChange={this.handleEduQual}
                                    value={this.state.grad}
                                  >
                                    <option value="" selected disabled>
                                      {" "}
                                      Educational Qualification
                                    </option>
                                    <option value="Under&#x20;Graduation">
                                      Under Graduation
                                    </option>
                                    <option value="Post&#x20;Graduation">
                                      Post Graduation
                                    </option>
                                  </select>
                                  <br />
                                </div>
                              </div>

                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="LEADCF11"
                                    name="LEADCF11"
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="Name of the institute"
                                    required
                                    onChange={this.handleClgName}
                                    value={this.state.clgName}
                                  />
                                  <br />
                                </div>
                              </div>

                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="LEADCF14"
                                    name="LEADCF14"
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="Specialization"
                                    required
                                    onChange={this.handleSpecalization}
                                    value={this.state.specalization}
                                  />
                                </div>
                                <br />
                              </div>

                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <select
                                    className="form-controls"
                                    id="LEADCF22"
                                    name="LEADCF22"
                                    required
                                    // onChange={this.handleDegreeLevel}
                                    value={this.state.deglvl}

                                    onChange={(e) => {
                                      this.handleDegreeLevel(e);
                                      console.log(e.target.value);
                                      this.setState({
                                        graduate:((e.target.value !== "") && (e.target.value !=="Graduated")),
                                      });
                                     
                                    }}
                                  >
                                    <option value="" selected disabled>
                                      Degree Level
                                    </option>
                                    <option value="First&#x20;year">
                                      First year
                                    </option>
                                    <option value="Second&#x20;year">
                                      Second year
                                    </option>
                                    <option value="Third&#x20;year">
                                      Third year
                                    </option>
                                    <option value="Fourth&#x20;year">
                                      Fourth year
                                    </option>
                                    <option value='Graduated'>Graduated</option>
                                  </select>
                                  <br />
                                </div>
                              </div>
                              {this.state.graduate && (
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="number"
                                    min="0"
                                    id="LEADCF21"
                                    name="LEADCF21"
                                    maxlength="255"
                                    className="form-controls "
                                    placeholder="Recent Semester Marks"
                                    required
                                    onKeyDown={this.blockInvalidChar}
                                    onChange={this.handleSemMarks}
                                    value={this.state.semMarks}
                                  />
                                </div>
                                <br />
                              </div>
                              )}
                                {!this.state.graduate && (
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="number"
                                    id='LEADCF31' name='LEADCF31'
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="Degree Score"
                                    required
                                    onKeyDown={this.blockInvalidChar}
                                    onChange={this.handleDegreeScore}
                                    value={this.state.degScore}
                                  />
                                </div>
                                <br />
                              </div>
                               )}
                              {/* </div>
                            <div className=" row "> */}
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="LEADCF16"
                                    name="LEADCF16"
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="Month & Year of Graduation"
                                    required
                                    onChange={this.handleYearofPass}
                                    value={this.state.yop}
                                  />
                                  <br />
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="number"
                                    min="0"
                                    id="LEADCF26"
                                    name="LEADCF26"
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="Total Work Experience in Years"
                                    required
                                    onKeyDown={this.blockInvalidChar}
                                    onChange={this.handleExpYears}
                                    value={this.state.wrkYears}
                                  />
                                </div>
                                <br />
                              </div>
                            
                              <div className="col-md-6 col-sm-12  mb-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    min="0"
                                    id="LEADCF23"
                                    name="LEADCF23"
                                    maxlength="255"
                                    className="form-controls"
                                    placeholder="Work Experience Details"
                                    required
                                    onChange={this.handleExpDtls}
                                    value={this.state.wrkDtls}
                                  />
                                </div>
                                <br />
                              </div>
                            </div>
                          </div>
                        )}
                        ;
                      
                        <div>
                          
                          {this.state.formRegister === true && (
                            <button
                              className="btn-bitlabs"
                              id="formsubmit"
                              type="submit"
                              value="Submit"
                            >
                              <span className="send">Submit</span>
                            </button>
                          )}

                          {this.state.formDrive === true && (
                            <div className="button-send">
                              <button
                                className="btn-bitlabs"
                                id="formsubmit"
                                type="submit"
                                value="Submit"
                              >
                                <span className="send">Register</span>
                              </button>
                            </div>
                          )}
                         
                        </div>
                      </form>
                    </div>
                    <div className="">
                      <span
                        className="confirmID-message-drawn"
                        id="confirmID-1"
                      ></span>
                      <br />
                      <span
                        className="confirmID-message-drawn"
                        id="confirmID-2"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Footer-pr" id="Footer-draw">
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
export default registration;
