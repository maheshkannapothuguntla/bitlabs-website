import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section12 = PageContent.section12;
export default () => {
  return (
    <div className="hiring-main">
      <div className="bg-hiring-main">
        <p className="our-hiring-partners">{section12.title}</p>
        <div className="hiring-padding">
          <div className="row row-align-hiring hiring-image ">
            <div className=" col-md-2 col-sm-6 col-4  padding-hiring ">
              <img 
              src={require("../assets/intertrust_new.png")} alt="intertrust" />
            </div>
            <div className=" col-md-2 col-sm-6 col-4 padding-hiring">
              <img 
                src={require("../assets/Symphonize.png")}
                alt="Symphonize"
              />
            </div>
            <div className=" col-md-2 col-sm-6 col-4 padding-hiring ">
              <img 
              src={require("../assets/esper.png")} alt="Esper" />
            </div>
            <div className=" col-md-2 col-sm-6 col-4 padding-hiring ">
              <img
                src={require("../assets/Bitmap Copy 2.png")}
                alt="Motto systems"
              />
            </div>
            <div className=" col-md-2 col-sm-6 col-4 padding-hiring">
              <img 
                src={require("../assets/Bitmap Copy 5.png")}
                alt="Applexus"
             
              />
            </div>
            <div className=" col-md-2 col-sm-6 col-4  padding-hiring davinta">
              <img 
                src={require("../assets/Bitmap Copy.png")} alt="Davinta" />
            </div>
            <div className=" col-md-2 col-sm-6 col-4  padding-hiring hawlett ">
              <img 
               src={require("../assets/hpe.png")} alt="hewlett" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
