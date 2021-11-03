import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section2 = PageContent.section2;
const section4 = PageContent.section4;
export default () => {
   React.useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
              clearInterval(timer);
            }
          }, step);
      }
      counter("count1", 0, 100, 8000);
      counter("count2", 0, 270, 8000);
      counter("count3", 0, 2000, 800);
    });
  }, [0]);
  return ( 
    <div className="advantagemain" >
      <div className="advantagemain-background">
        <p className="world-class-learning-advantage">
          {/* A unique program crafted by industry leaders for your success! */}
          {section2.title}
          {process.env.DevENVIRONMENT}
        </p>
        <div className="row row-align-width-advantage">
          <div className="col-md-2 col-sm-6 col-12 mentor">
            <img 
              src={require("../assets/mentor.png")}
              alt="Mentor"
              // width="42px"
              // height="44px"
            />
            <p className="softskill-training"> 
              {/* Personalised Attention for All Students */}
              {section2.items[0].title1}
            </p>
          </div>
          <div className="col-md-2 col-sm-6 col-12 softskills">
            <img 
              src={require("../assets/softskills.png")}
              alt="softskills"
              //  width="46px"
              //  height="48px"
            />
            <p className="softskill">{section2.items[0].title2}</p>
          </div>
          <div className="col-md-2  col-12 web-pro">
            <img 
              src={require("../assets/web-programming.png")}
              alt="Web Programming"
              height="43px"
            />
            <p className="softskill-training-lern">
              {section2.items[0].title3}
            </p>
          </div>
          <div className="col-md-2 col-12 job-search">
            <img 
              src={require("../assets/job-search.png")}
              alt="job-search"
              height="49px"
            />
            <p className="softskill-training-intern">{section2.items[0].title4}</p>
          </div>
          <div className="col-md-2 col-12 interview">
            <img 
              src={require("../assets/INterview.png")}
              alt="Interview" 
              height="47px"
            />
            <p className="softskill-training">{section2.items[0].title5}</p>
          </div>
        </div>
      </div>
       <div class="container text-display">
            <div class="row justify-content-center text-center">
              <div class="col-md-4">
                <span id="count1" className=" text-display-color" ></span><span className=" text-display-color"><b>+</b></span>
                <p>{section4.text1}</p>
              </div>
              <div class="col-md-4">
                <span id="count2"className=" text-display-color" ></span><span className=" text-display-color" >+</span>
                <p>{section4.text2}</p>
              </div>
              <div class="col-md-4">
                <span id="count3"className="text-display-color" ></span><span className=" text-display-color">+</span>
                <p>{section4.text3}</p>
              </div>
            </div>
          </div>
    </div>
  );
};
