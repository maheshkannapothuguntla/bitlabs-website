import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section7 = PageContent.section7;
export default () => {
  return (
    <div className="accordian-main" id="bitLabsFAQs">
      <div className="bg-accordian-main">
        <p className="frequently-asked-que ">{section7.title}</p>
        <div className="aligncontent">
          <div className="row row-align accordion-gradient-bcg d-flex justify-content-center">
            <div className="col-md-10 col-sm-20 col-xl-6 py-5">
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
                        <span className="ot">{section7.items[0].number}</span>{" "}
                        <span className="ali">{section7.items[0].title} </span>
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
                      <p className="lorem-ipsum-dolor-si-accodrian">
                        {section7.items[0].description}
                      </p>
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
                        <span className="ot">{section7.items[1].number}</span>{" "}
                        <span className="ali">{section7.items[1].title}</span>{" "}
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
                      <p className="lorem-ipsum-dolor-si-accodrian">
                        {section7.items[1].description}
                      </p>
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
                        <span className="ot">{section7.items[2].number}</span>{" "}
                        <span className="ali">{section7.items[2].title} </span>
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
                        {section7.items[2].description}
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
                        <span className="ot">{section7.items[3].number}</span>{" "}
                        <span className="ali">{section7.items[3].title}</span>
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
                      <p className="lorem-ipsum-dolor-si-accodrian">
                        {section7.items[3].description}
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
                      data-parent="#accordionEx7"
                      href="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      <i className="fa fa-plus dynamic"></i>
                      <i className="fa fa-minus dynamic"></i>
                      <p className="mb-0 white-text  font-thin how-do-i-sign-up-for ">
                        <span className="ot">{section7.items[4].number}</span>{" "}
                        <span className="ali">{section7.items[4].title} </span>
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
                      <p className="lorem-ipsum-dolor-si-accodrian">
                        {section7.items[4].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
