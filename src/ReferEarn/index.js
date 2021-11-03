import React, { useState } from "react";
import Bitlabsfooter from "../bitlabsfooter/index";
import "./Style.css"
import { PageContent } from "../BitlabsContent";

const section14 = PageContent.section14;
function ReferEarn() {
  const [campusForm, setCampusForm] = useState(true);
  const [partnerForm, setPartnerForm] = useState(false);


  

  return (
    <div>

      <a href="/">
        <nav className="col-md-11 col-sm-12 col-9 navbar navbar-expand-lg  navbar-light ">
          <div className="image-logo-alignments">
            <img
              src={require("../assets/bitlabs horizontal logo.png")}
              alt="logo"
              className="logo-image"
            />
            
              
          </div>
        </nav>
        </a>
        
     <div className="row refermain " >
        {/* <img className=" resp-alignment col-lg-12 col-md-12 col-sm-12 col-xs-12"
          src={require("../assets/Final Refer and Earn header image.png")}
        /> */}
  
  <div className="refern_btn btn">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS0hz-tR3F4zr1o-TmO9ygFLM304oQSmt5AAMfq90Vz6ax2w/viewform" target="_blank">
        <img className="refer_btn_width" src={require("../assets/refer and earn button.png")} /></a>
        {/* <img className="" /> */}
        </div>
        </div>
      <div className="advantagemain ">
        <div className="advantagemain-background">
          <p className="frequently-asked-que">{ section14.subtitle3}</p>
          <div className="row row-align-width-advantage">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mentor ">
             
              <img src={require("../assets/Refer.png")}  className=" refer-img-width"/>
              <p className="softskill-training">
                <h2 >{section14.title1}</h2>
                {section14.refer}
              </p>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mentor">
             
                <img src={require("../assets/Enroll.png")} className="refer-img-width"/>
              <p className="softskill-training">
                <h2 >{section14.title2}</h2>
                {section14.enroll}
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mentor">
           
               <img src={require("../assets/Earn.png")} className="refer-img-width"/>
              <p className="softskill-training">
                <h2  >{section14.title3}</h2>
                {section14.reward}
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className=" world-class-learning-advantage row row-align">
      <p className="refer-colors col-12 txt-size">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS0hz-tR3F4zr1o-TmO9ygFLM304oQSmt5AAMfq90Vz6ax2w/viewform" target="_blank" >
                {section14.sectionFooter}
              </a>
        </p>
        </div>
   
      <div className="accordian-main" id="bitLabsFAQs">
        <div className="bg-accordian-main">
          <p className="frequently-asked-que line_height">{section14.title}</p>
          <section className="container text-center">
            <ul className="list-inline">
              <li className="list-inline-item g-brd-right g-brd-gray-light-v4 px-4 mx-0">
                <a
                  className="softskill-training"
                  href="#AmbassadorFaq"
                  dataTarget="#campusProgram"
                  onClick={() => {
                    setCampusForm(true);
                    setPartnerForm(false);
                  }}
                >
                  {section14.subtitle1}
                </a>
              </li>
              <li className="list-inline-item g-brd-right g-brd-gray-light-v4 px-4 mx-0 softskill-training txt-size">|</li>
              <li className="list-inline-item g-brd-right g-brd-gray-light-v4 px-4 mx-0">
                <a
                  className="softskill-training"
                  href="#ParterFaq"
                  dataTarget="#ParterFaq"
                  onClick={() => {
                    setCampusForm(false);
                    setPartnerForm(true);
                  }}
                >
                  {section14.subtitle2}
                </a>
              </li>
            </ul>
          </section>
          {campusForm && (
            <section className="container ">
              <div
                id="AmbassadorFaq"
                className="rounded"
              
              >
                <div className="row justify-content-center row-align accordion-gradient-bcg d-flex">
                  <div className="col-lg-10">
                    <div className="faq-list">
                      <h2>{section14.subtitle1}</h2>
                    </div>
                    <div className="aligncontent">
                     
                      <div
                        className="accordion md-accordion accordion-1"
                        id="accordionEx7"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1 "
                            role="tab"
                            id="heading2"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx7"
                              href="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text font-thin what-are-my-payment">
                                <span className="ot">
                                  {section14.items[0].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[0].title}{" "}
                                </span>
                              </p>
                            </a>
                          </div>

                          <div
                            id="collapse1"
                            className="collapse show"
                            role="tabpanel"
                            aria-labelledby="heading2"
                            data-parent="#accordionEx7"
                          >
                            <div className="card-body  rgba-grey-light white-text">
                              <ol
                                className="lorem-ipsum-dolor-si-accodrian"
                                type="a"
                              >
                                <li> {section14.items[0].description1}</li>
                                <li> {section14.items[0].description2}</li>
                                <li> {section14.items[0].description3}</li>
                                <li> {section14.items[0].description4}</li>
                                <li> {section14.items[0].description5}</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1 "
                            role="tab"
                            id="heading1"
                          >
                            <a
                              data-toggle="collapse"
                              data-parent="#accordionEx7"
                              href="#collapse2"
                              aria-expanded="false"
                              aria-controls="collapse2"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for">
                                <span className="ot">
                                  {section14.items[1].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[1].title}
                                </span>{" "}
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse2"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading1"
                            data-parent="#accordionEx7"
                          >
                            <div className="card-body  rgba-grey-light how-do-i-sign-up-for">
                              <ol
                                className="lorem-ipsum-dolor-si-accodrian"
                                type="a"
                              >
                                <li>{section14.items[1].description1}</li>
                                <li>{section14.items[1].description2}</li>
                                <li> {section14.items[1].description3}</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1  "
                            role="tab"
                            id="heading2"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx7"
                              href="#collapse3"
                              aria-expanded="false"
                              aria-controls="collapse3"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for ">
                                <span className="ot">
                                  {section14.items[2].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[2].title}{" "}
                                </span>
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse3"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading2"
                            data-parent="#accordionEx7"
                          >
                            <div className="card-body  rgba-grey-light how-do-i-sign-up-for">
                              <p className="lorem-ipsum-dolor-si-accodrian">
                                {section14.items[2].description}

                                <ol
                                  className="lorem-ipsum-dolor-si-accodrian"
                                  type="a"
                                >
                                  <li>{section14.items[2].description1}</li>
                                  <li>{section14.items[2].description2}</li>
                                  <li> {section14.items[2].description3}</li>
                                </ol>
                              </p>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1 "
                            role="tab"
                            id="heading3"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx7"
                              href="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapse4"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for">
                                <span className="ot">
                                  {section14.items[3].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[3].title}
                                </span>
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse4"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading3"
                            data-parent="#accordionEx7"
                          >
                            <div className="card-body  rgba-grey-light white-text">
                              <ol
                                className="lorem-ipsum-dolor-si-accodrian"
                                type="a"
                              >
                                <li>{section14.items[3].description1}</li>
                                <li>{section14.items[3].description2}</li>
                                <li> {section14.items[3].description3}</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1  "
                            role="tab"
                            id="heading4"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx7"
                              href="#collapse5"
                              aria-expanded="false"
                              aria-controls="collapse5"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for ">
                                <span className="ot">
                                  {section14.items[4].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[4].title}{" "}
                                </span>
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse5"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading2"
                            data-parent="#accordionEx7"
                          >
                            <div className="card-body  rgba-grey-light how-do-i-sign-up-for">
                              <ol
                                className="lorem-ipsum-dolor-si-accodrian"
                                type="a"
                              >
                                <li>{section14.items[4].description1}</li>
                                <li>{section14.items[4].description2}</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1  "
                            role="tab"
                            id="heading5"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx7"
                              href="#collapse6"
                              aria-expanded="false"
                              aria-controls="collapse6"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for ">
                                <span className="ot">
                                  {section14.items[5].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[5].title}{" "}
                                </span>
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse6"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading5"
                            data-parent="#accordionEx7"
                          >
                            <div className="card-body  rgba-grey-light how-do-i-sign-up-for">
                              <p className="lorem-ipsum-dolor-si-accodrian">
                                {section14.items[5].description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          <br />
         
          {partnerForm && (
            <section className="container ">
              <div
                id="ParterFaq"
                className="rounded"
                
              >
                <div className="row justify-content-center row-align accordion-gradient-bcg d-flex">
                  <div className="col-lg-10">
                    <div className="faq-list">
                      <h2>{section14.subtitle2}</h2>
                    </div>
                    <div className="aligncontent">
                     
                      <div
                        className="accordion md-accordion accordion-1"
                        id="accordionEx8"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1 "
                            role="tab"
                            id="heading6"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx8"
                              href="#collapse7"
                              aria-expanded="true"
                              aria-controls="collapse7"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text font-thin what-are-my-payment">
                                <span className="ot">
                                  {section14.items[6].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[6].title}{" "}
                                </span>
                              </p>
                            </a>
                          </div>

                          <div
                            id="collapse7"
                            className="collapse show"
                            role="tabpanel"
                            aria-labelledby="heading6"
                            data-parent="#accordionEx8"
                          >
                            <div className="card-body  rgba-grey-light white-text">
                              <ol
                                className="lorem-ipsum-dolor-si-accodrian"
                                type="a"
                              >
                                <li> {section14.items[6].description1}</li>
                                <li> {section14.items[6].description2}</li>
                                <li> {section14.items[6].description3}</li>
                                <li> {section14.items[6].description4}</li>
                                <li> {section14.items[6].description5}</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1 "
                            role="tab"
                            id="heading7"
                          >
                            <a
                              data-toggle="collapse"
                              data-parent="#accordionEx8"
                              href="#collapse8"
                              aria-expanded="false"
                              aria-controls="collapse8"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for">
                                <span className="ot">
                                  {section14.items[7].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[7].title}
                                </span>{" "}
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse8"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading7"
                            data-parent="#accordionEx8"
                          >
                            <div className="card-body  rgba-grey-light how-do-i-sign-up-for">
                              <ol
                                className="lorem-ipsum-dolor-si-accodrian"
                                type="a"
                              >
                                <li>{section14.items[7].description1}</li>
                                <li>{section14.items[7].description2}</li>
                                <li> {section14.items[7].description3}</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1  "
                            role="tab"
                            id="heading2"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx8"
                              href="#collapse9"
                              aria-expanded="false"
                              aria-controls="collapse9"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for ">
                                <span className="ot">
                                  {section14.items[8].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[8].title}{" "}
                                </span>
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse9"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading2"
                            data-parent="#accordionEx8"
                          >
                            <div className="card-body  rgba-grey-light how-do-i-sign-up-for">
                              <ol
                                className="lorem-ipsum-dolor-si-accodrian"
                                type="a"
                              >
                                <li>{section14.items[8].description1}</li>
                                <li>{section14.items[8].description2}</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1 "
                            role="tab"
                            id="heading3"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx8"
                              href="#collapse10"
                              aria-expanded="false"
                              aria-controls="collapse10"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for">
                                <span className="ot">
                                  {section14.items[9].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[9].title}
                                </span>
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse10"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading3"
                            data-parent="#accordionEx8"
                          >
                            <div className="card-body  rgba-grey-light white-text">
                              <ol
                                className="lorem-ipsum-dolor-si-accodrian"
                                type="a"
                              >
                                <li>{section14.items[9].description1}</li>
                                <li>{section14.items[9].description2}</li>
                                <li> {section14.items[9].description3}</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1  "
                            role="tab"
                            id="heading4"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx8"
                              href="#collapse11"
                              aria-expanded="false"
                              aria-controls="collapse11"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for ">
                                <span className="ot">
                                  {section14.items[10].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[10].title}{" "}
                                </span>
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse11"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading2"
                            data-parent="#accordionEx8"
                          >
                            <div className="card-body  rgba-grey-light how-do-i-sign-up-for">
                              <p className="lorem-ipsum-dolor-si-accodrian">
                                {section14.items[10].description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card accordian-background">
                          <div
                            className="card-header rgba-stylish-strong z-depth-1  "
                            role="tab"
                            id="heading4"
                          >
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordionEx8"
                              href="#collapse12"
                              aria-expanded="false"
                              aria-controls="collapse12"
                            >
                              <i className="fa fa-plus dynamic"></i>
                              <i className="fa fa-minus dynamic"></i>
                              <p className="mb-0 white-text  font-thin how-do-i-sign-up-for ">
                                <span className="ot">
                                  {section14.items[11].number}
                                </span>{" "}
                                <span className="ali">
                                  {section14.items[11].title}{" "}
                                </span>
                              </p>
                            </a>
                          </div>
                          <div
                            id="collapse12"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="heading2"
                            data-parent="#accordionEx8"
                          >
                            <div className="card-body  rgba-grey-light how-do-i-sign-up-for">
                              <p className="lorem-ipsum-dolor-si-accodrian">
                                {section14.items[11].description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
             
            </section>
          )}
          
        </div>
      
        </div>
        
     
 
      <Bitlabsfooter />
    </div>
  );
}
export default ReferEarn;
