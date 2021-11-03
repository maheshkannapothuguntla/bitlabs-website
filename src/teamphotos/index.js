import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section9 = PageContent.section9;
export default () => {
  return (
    <div className="team-main">
      <div className="bg-team-main">
        <div className="padding-bottom">
          <p className="a-team-that-knows-wh">{section9.title}</p>
          <div className="row row-adjust ">
          <div className="col-md-4 col-sm-12 ">
              <div className="mask ">
                <div className="oval-2 ">
        
                    <img
                      src={require("../assets/sreedhar.png")}
                      alt="sreedhar"
                    />
                  
                </div>
                <p className="ashok-cherukuri-ce">{section9.items[2].name}</p>
                <p className="team-title">{section9.items[2].title}</p>
                <p className="a-career-entrepreneu">
                  {section9.items[2].description}
                </p>
              </div>
            </div>
      
            <br />
            <div className="col-md-4 col-sm-12 ">
              <div className="mask ">
                <div className="oval-2 ">
                  <img src={require("../assets/Sridhar.png")} alt="Sridhar" />
                </div>
                <p className="ashok-cherukuri-ce">{section9.items[1].name}</p>
                <p className="team-title">{section9.items[1].title}</p>
                <p className="a-career-entrepreneu">
                  {section9.items[1].description}
                </p>
              </div>
              <br />
            </div>
            <div className="col-md-4 col-sm-12 ">
              <div className="mask ">
                <div className="oval-2 ">
                  <img src={require("../assets/Ashok.png")} alt="Ashok" />
                </div>
                <p className="ashok-cherukuri-ce">{section9.items[0].name}</p>
                <p className="team-title">{section9.items[0].title}</p>
                <p className="a-career-entrepreneu">
                  {section9.items[0].description}
                </p>
              </div>
              <br />
            </div>
            <br />
          </div>
          <br />

          <div className="row row-adjust ">
          <div className="col-md-4 col-sm-12 ">
              <div className="mask ">
                <div className="oval-2 ">
                  
                    <img
                      src={require("../assets/Roopa_Shetty.png")}
                      alt="Roopa"
                    />
                 
                </div>
                <p className="ashok-cherukuri-ce">{section9.items[3].name}</p>
                <p className="team-title">{section9.items[3].title}</p>
                <p className="a-career-entrepreneu">
                  {section9.items[3].description}
                </p>
              </div>
            </div>
            <br />
            <div className="col-md-4 col-sm-12 ">
              <div className="mask ">
                <div className="oval-2 ">
                
                    <img src={require("../assets/mahesh.png")} alt="mahesh" />
                 
                </div>
                <p className="ashok-cherukuri-ce">
                {section9.items[4].name}
                </p>
                <p className="team-title">{section9.items[4].title}</p>
                <p className="a-career-entrepreneu">
                  {section9.items[4].description}
                </p>
                
              </div>
            </div>
            <div className="col-md-4 col-sm-12 ">
              <div className="mask ">
                <div className="oval-2 ">
                  <img src={require("../assets/Rakesh_S.png")} alt="Rakesh" />
                </div>
                <p className="ashok-cherukuri-ce">
                  {section9.BitLabsTeam[1].name}
                </p>
                <p className="team-title">{section9.BitLabsTeam[1].qual}</p>
                <p className="team-title">
                  {section9.BitLabsTeam[1].designation}
                </p>
                {/* <p className="a-career-entrepreneu">
                  <a href="tel:+919182616657">
                    <p className="footer-address">
                      <i className="fa fa-volume-control-phone phone-style"></i>
                      &nbsp;
                      <span> {section9.BitLabsTeam[1].MobNo}</span>
                    </p>
                  </a>
                </p> */}
                <p className="a-career-entrepreneu">
                  <a href="mailto:advisor@bitlabs.in">
                    <p className="footer-address">
                      <i
                        class="fa fa-envelope  phone-style"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                      <span> {section9.BitLabsTeam[1].mail}</span>
                    </p>
                  </a>
                </p>
                <div className="a-career-entrepreneu">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  &nbsp;
                  <a href={section9.BitLabsTeam[1].LinkedLink} target="_blank">
                    Linkedin Profile
                  </a>
                </div>
              </div>
              <br />
            </div>
            <br />
            
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
