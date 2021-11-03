import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section10 = PageContent.section10;
export default () => {
  return (
    <div className="placement-main" id="Placements">
      <div className="bg-placement-main">
        <div>
          <p className="bit-labs-placement-pr">
            {/* Give Your Career a Great Start*/}
            {section10.title}
          </p>
        </div>
        <div className="row row-align">
          <div className="col-md-5 col-sm-10 image-container ">
            {" "}
            <img
              className="image-container"
              src={require("../assets/getnotices.png")}
              alt="Get Notices"
            />
            <div className="space">
              <p className="get-noticed">
                {/*Get Noticed with Projects & Internship*/}
                {section10.items[0].title}{" "}
              </p>
              <p className="lorem-ipsum-dolor-si-1">
                {section10.items[0].description}
              </p>
            </div>
            <img
              className="image-container"
              src={require("../assets/practice.png")}
              alt="Practice"
            />
            <div className="space">
              <p className="get-noticed">{section10.items[2].title} </p>
              <p className="lorem-ipsum-dolor-si-1 ">
                {section10.items[2].description}
              </p>
            </div>
          </div>
          <div className="col-md-5 col-sm-10 image-container">
            {" "}
            <img
              className="image-container"
              src={require("../assets/career.png")}
              alt="Career"
            />
            <div className="space">
              <p className="get-noticed">{section10.items[1].title}</p>
              <p className="lorem-ipsum-dolor-si-1">
                {section10.items[1].description}
              </p>
              <img
                className="image-container"
                src={require("../assets/landjob.png")}
                alt="landjob"
              />
              <div className="space">
                <p className="get-noticed"> {section10.items[3].title}</p>
                <p className="lorem-ipsum-dolor-si-1">
                  {section10.items[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
