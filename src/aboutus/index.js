import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section8 = PageContent.section8;
export default () => {
  return (
    <div className="team-main" id="AboutUs">
      <div className="bg-team-main">
        <div className="row row-align">
          <div className="col-md-3 col-sm-6 ">
            <p className="team-h1">{section8.title}</p>
            <p className="team-h2">{section8.subtitle}</p>
          </div>
          <div className="col-md-7 col-sm-14 ">
            <p className="team-para">{section8.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
