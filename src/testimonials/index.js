import Carousel from "nuka-carousel";
import React from "react";
import "./style.css";
import { PageContent } from "../BitlabsContent";

const section13 = PageContent.section13;
const isClient = typeof window !== "undefined";
class Testimonials extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      underlineHeader: false,
      slidesToShow: 1,
      cellAlign: "left",
      transitionMode: "scroll",
      heightMode: "max",
      withoutControls: false,
      autoplay: true,
      renderBottomCenterControls: false,
      renderCenterLeftControls: false,
      renderCenterRightControls: false,
      wrapAround: true,
      viewportWidth: 0,
    };
  }
  componentDidMount() {
    if (isClient) {
      window.addEventListener("resize", this.updateWindowDimensions);
      this.updateWindowDimensions();
    }
  }
  updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
  };
  render() {
    const { viewportWidth } = this.state;
    const isMobile = Boolean(viewportWidth <= 800);
    return (
      <div className="testimonialmain">
        <div className="testimonialmain-background">
          <div className="testimonials">
            <p className="details-on-test">{section13.title}</p>

            {/* <span className="test-intro">
              Today's engineers have the responsibility to shape the future of
              our technological advancements. However, market research says that
              only a mere 10% of graduating engineers have the necessary skills
              for entry level jobs.
            </span> */}

            <div className="row row-align ">
              <Carousel
                withoutControls={this.state.withoutControls}
                transitionMode={this.state.transitionMode}
                cellAlign={this.state.cellAlign}
                slidesToShow={this.state.slidesToShow}
                wrapAround={this.state.wrapAround}
                slideIndex={this.state.slideIndex}
                heightMode={this.state.heightMode}
                autoplay={this.state.autoplay}
                renderBottomCenterControls={
                  this.state.renderBottomCenterControls
                }
                renderCenterLeftControls={this.state.renderCenterLeftControls}
                renderCenterRightControls={this.state.renderCenterRightControls}
                slidesToShow={!isMobile ? 1.285 : 1}
                cellSpacing={20}
                autoplayInterval={8000}
                // renderCenterLeftControls={({ previousSlide }) => (
                //   <button onClick={previousSlide} className="icon-btn prevbtn">
                //     <i
                //       className="fa fa-chevron-left fa-3x icon "
                //       aria-hidden="true"
                //     ></i>
                //   </button>
                // )}
                // renderCenterRightControls={({ nextSlide }) => (
                //   <button onClick={nextSlide} className="icon-btn nextbtn">
                //     <i
                //       className="fa fa-chevron-right fa-3x icon"
                //       aria-hidden="true"
                //     ></i>
                //   </button>
                // )}
              >
                {section13.details.map((x, i) => {
                  return (
                    <div key={i} className="img-card ">
                      <div className="image-block">
                        <img src={x.img} className="img" />
                      </div>
                      <div className="cardBody">
                        <div className="card-main">
                          <div className="card-text ">{x.text}</div>
                          <div className="text-dtls">
                            <div className="qualDtls">
                              <div className="card-title">{x.name}&nbsp; </div>
                              <span>{x.branch} </span>
                            </div>
                            <div>
                              {x.clgName}
                              {x.city}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
