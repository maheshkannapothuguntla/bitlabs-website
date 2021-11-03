import * as React from "react";
import "./styles.css";
import { PageContent } from "../BitlabsContent";
const section3 = PageContent.section3;
const section4 = PageContent.section4;
export default () => {
  // React.useEffect(() => {
  //   document.addEventListener("DOMContentLoaded", () => {
  //     function counter(id, start, end, duration) {
  //       let obj = document.getElementById(id),
  //         current = start,
  //         range = end - start,
  //         increment = end > start ? 1 : -1,
  //         step = Math.abs(Math.floor(duration / range)),
  //         timer = setInterval(() => {
  //           current += increment;
  //           obj.textContent = current;
  //           if (current == end) {
  //             clearInterval(timer);
  //           }
  //         }, step);
  //     }
  //     counter("count1", 0, 100, 8000);
  //     counter("count2", 0, 270, 8000);
  //     counter("count3", 0, 2000, 800);
  //   });
  // }, [0]);

  return (
    <div className="fingertripmain">
      <div className="fingertripmain-background">
        <p className="world-class-learning">{section3.title}</p>
        <div>
          <div className="row row-align ">
            <div className="col-md-6 col-sm-10 ">
              <p className="quality-1">{section3.items[0].title}</p>
              <p className="learn-from-industry">
                {section3.items[0].subTitle}
              </p>
              <p className="the-curriculum-as-we">
                {section3.items[0].description}
              </p>
            </div>
            <div className="col-md-4 col-sm-12 image-container">
              <img
                className="image-container "
                src={require("../assets/quality.png")}
                alt="quality"
              />
            </div>
          </div>
          <br />
          <div className="row row-align">
            <div className="col-md-4 col-sm-8 image-container">
              <img
                className="image-container displaymobile"
                src={require("../assets/convenient.png")}
                alt="convenient"
              />
            </div>
            <div className="col-md-6 col-sm-10 image-container">
              <div className="paddint-text ">
                <p className="convenient-1">{section3.items[1].title} </p>
                <p className="learn-from-industry">
                  {" "}
                  {section3.items[1].subTitle}
                </p>
                <p className="the-curriculum-as-we">
                  {section3.items[1].description}
                </p>
                <img
                  className="image-container displaymobile1"
                  src={require("../assets/convenient.png")}
                  alt="convenient"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row row-align">
            <div className="col-md-6 col-sm-10">
              <p className="convenient-1">{section3.items[2].title} </p>
              <p className="learn-from-industry">
                {section3.items[2].subTitle}
              </p>
              <p className="the-curriculum-as-we">
                {section3.items[2].description}
              </p>
            </div>
            <div className="col-md-4 col-sm-10 image-container">
              <img
                className="image-container"
                src={require("../assets/Learning.png")}
                alt="Learning"
              />
            </div>
          </div>
          <div className="strength" id="WhybitLabs">
            <p className="why-btlabs">{section4.title}</p>
            <div className="row row-align">
              <div className="col-md-10 col-sm-10">
                <p className="bitlabs-is-birthed-t">
                  {section4.items[0].description}
                </p>
              </div>
            </div>
            <div className="row row-align">
              <div className="col-xl-5 col-lg-10 col-md-10 col-sm-10 pad-top-30">
                <iframe className="video-size"
                  title="why-bitlabs-mov"
                  src="https://www.youtube.com/embed/JeBhQPRwDug?rel-0&controls=0&modestbranding=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="bitlabs-is-birthed-left pad-top-30">
                  {section4.items[1].description}
                </p>
              </div>

              <div className="col-xl-5 col-lg-10 col-md-10 col-sm-10 rectangle-5">
                <p className="our-strengths">{section4.items[2].title}</p>
                <ol>
                  <li className="fortext">
                    {section4.items[2].items[0].point1}
                  </li>
                  <li className="fortext">
                    {" "}
                    {section4.items[2].items[0].point2}
                  </li>
                  <li className="fortext">
                    {" "}
                    {section4.items[2].items[0].point3}
                  </li>
                  <li className="fortext">
                    {" "}
                    {section4.items[2].items[0].point4}
                  </li>
                  <li className="fortext">
                    {" "}
                    {section4.items[2].items[0].point5}
                  </li>
                  <li className="fortext">
                    {" "}
                    {section4.items[2].items[0].point6}
                  </li>

                  <li className="fortext">
                    {section4.items[2].items[0].point7}
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* <div class="container text-display">
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
          </div> */}

        </div>
      </div>

    </div>
  );
};
