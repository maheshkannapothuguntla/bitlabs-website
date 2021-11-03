import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section5 = PageContent.section5;

export default (props) => {
  function formvalue() {
    props.onForm();
  }
  return (
    <div className="curriculummain" id="Curriculum">
      <div className="curriculummain-background">
        <div className="curriculum">
          <p className="details-on-curriculu">{section5.title}</p>
          <div className="row row-align">
            <div className="col-md-6 col-sm-12 circulum-image">
              <img
                className="image-container"
                src={require("../assets/full stack.png")}
                alt="full stack"
              />
              <p className="full-stack-developer">{section5.items[0].title}</p>
              <p className="python">
                {section5.items[0].subTitle1}&nbsp;{" "}
                {section5.items[0].subTitle2}
                &nbsp; {section5.items[0].subTitle3}
              </p>
              <p className="become-a-full-stack">
                {section5.items[0].description}
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              {" "}
              <img
                className="image-container"
                src={require("../assets/softskills-1.png")}
                alt="softskills"
              />
              <p className="full-stack-developer">{section5.items[1].title}</p>
              <p className="python">
                {section5.items[1].subTitle1}&nbsp;{" "}
                {section5.items[1].subTitle2}
                &nbsp; &nbsp;{section5.items[1].subTitle3}
              </p>
              <p className="become-a-full-stack">
                {section5.items[1].description}
              </p>
            </div>
            <p className="detailed-curriculum">
              <a href="#KnowMore" onClick={formvalue}>
                {section5.items[0].sectionFooter}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
