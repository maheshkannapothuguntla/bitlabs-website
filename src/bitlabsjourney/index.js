import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section6 = PageContent.section6;
export default () => {
  return (
    <div className="journy-main" id="Howitworks">
      <div className="bg-journy-main">
        <div>
          <p className="your-bit-labs-journey">{section6.title}</p>
          <img 
            className="bitlab-journey "
            src={require("../assets/Journey.png")}
            alt="Journey"
          />
        </div>
        <div className="padding-top">
          <div className="row row-align ">
            <div className="col-md-2 col-sm-12">
              <div className="bitlanjourny-images">
                <img src={require("../assets/Group-1.png")} alt="Gruop-1" />
              </div>

              <img
                className="img-optimise"
                src={require("../assets/Group 6.png")}
                alt="Group-6"
              />
              <p className="sign-up-to-bit-labs-mentor">
                {section6.items[0].title}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[0].items[0].paragraph1}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[0].items[0].paragraph2}
              </p>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="bitlanjourny-images">
                <img src={require("../assets/arrow.png")} alt="arrow" />
              </div>
              <img
                className="img-optimise"
                src={require("../assets/Group 8.png")}
                alt="Group-8"
              />
              <p className="sign-up-to-bit-labs-mentor">
                {section6.items[1].title}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[1].items[0].paragraph1}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[1].items[0].paragraph2}
              </p>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="bitlanjourny-images">
                <img src={require("../assets/feedback.png")} alt="Feedback" />
              </div>
              <img
                className="img-optimise"
                src={require("../assets/Group 9.png")}
                alt="Group-9"
              />
              <p className="sign-up-to-bit-labs-mentor">
                {section6.items[2].title}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[2].items[0].paragraph1}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[2].items[0].paragraph2}
              </p>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="bitlanjourny-images">
                <img src={require("../assets/graduate.png")} alt="graduate" />
              </div>
              <img
                className="img-optimise"
                src={require("../assets/Group 10.png")}
                alt="Group 10"
              />
              <p className="sign-up-to-bit-labs-mentor">
                {section6.items[3].title}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[3].items[0].paragraph1}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[3].items[0].paragraph2}
              </p>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="bitlanjourny-images">
                <img src={require("../assets/get hired.png")} alt="get-hired" />
              </div>
              <img
                className="img-optimise"
                src={require("../assets/Group 15.png")}
                alt="Group 15"
              />
              <p className="sign-up-to-bit-labs-mentor">
                {section6.items[4].title}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[4].items[0].paragraph1}
              </p>
              <p className="fill-up-the-form-bel">
                {section6.items[4].items[0].paragraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
