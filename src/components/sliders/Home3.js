import { home3Slider } from "@/src/sliderProps";
import Link from "next/link";
import { Component } from "react";
import Slider from "react-slick";

export default class Home3Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="hero-section">
        <div className="hero-wrapper-three">
          <div className="hero-arrows">
            <div className="prev slick-arrow" onClick={this.previous}>
              <i className="far fa-arrow-left" />
            </div>
            <div className="next slick-arrow" onClick={this.next}>
              <i className="far fa-arrow-right" />
            </div>
          </div>
          <Slider
            {...home3Slider}
            ref={(c) => (this.slider = c)}
            className="hero-slider-three"
          >
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero-three_img-1.jpg)",
                    backgroundSize: "100% 100%",// Set the background size to cover the container
                     width: "91%", // Set the width of the image
                     height: "90%",
                     marginLeft: "-5px",
                     marginRight: "-55px" // Set the height of the image
                }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-7">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <span className="sub-title"></span>
                      <h1 data-animation="fadeInDown" data-delay=".4s" style={{  fontWeight: 'lighter', fontSize: '200px' }}>
                        ,
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                        <Link legacyBehavior href="/about">
                          <a className="main-btn secondary-btn">
                            Learn More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero-three_img-2.jpg)",
                }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-7">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <span className="sub-title"></span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Utalii Africa Tourism Expo
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/tour-details">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                        <Link legacyBehavior href="/tour">
                          <a className="main-btn secondary-btn">
                            Learn More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            
          </Slider>
        </div>
      </section>
    );
  }
}
