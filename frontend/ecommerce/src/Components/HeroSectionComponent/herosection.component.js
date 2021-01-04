import React from "react";
import CategoryAccordion from "./accordion.component";
import "./best-carousel-slide.css";

import LOGO from "./img/logo.png";

export default function Herosection() {
  return (
    <div>
      {/* <!-- Hero Section Begin --> */}
      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div>
                <img src={LOGO} />
              </div>
              <br />
              <div>
                <CategoryAccordion />
              </div>
            </div>
            <div class="col-lg-9">
              <div class="hero__search">
                <div class="hero__search__form">
                  <form action="#">
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" class="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div class="hero__search__phone">
                  <div class="hero__search__phone__icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div>
                <section id="carousel">
                  <div
                    class="carousel slide"
                    data-ride="carousel"
                    id="carousel-1"
                  >
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item">
                        <div class="jumbotron pulse animated hero-nature carousel-hero">
                          <h1 class="hero-title">Hero Nature</h1>
                          <p class="hero-subtitle">
                            Nullam id dolor id nibh ultricies vehicula ut id
                            elit. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam.
                          </p>
                          <p>
                            <a
                              class="btn btn-primary hero-button plat"
                              role="button"
                              href="#"
                            >
                              Learn more
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="jumbotron pulse animated hero-photography carousel-hero">
                          <h1 class="hero-title">Hero Photography</h1>
                          <p class="hero-subtitle">
                            Nullam id dolor id nibh ultricies vehicula ut id
                            elit. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam.
                          </p>
                          <p>
                            <a
                              class="btn btn-primary hero-button plat"
                              role="button"
                              href="#"
                            >
                              Learn more
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="carousel-item active">
                        <div
                          class="jumbotron hero-technology carousel-hero"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <h1 class="hero-title">Hero Technology</h1>
                          <p class="hero-subtitle">
                            Nullam id dolor id nibh ultricies vehicula ut id
                            elit. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam.
                          </p>
                          <p>
                            <a
                              class="btn btn-primary hero-button plat"
                              role="button"
                              href="#"
                            >
                              Learn more
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        class="carousel-control-prev"
                        href="#carousel-1"
                        role="button"
                        data-slide="prev"
                      >
                        <i class="fa fa-chevron-left"></i>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#carousel-1"
                        role="button"
                        data-slide="next"
                      >
                        <i class="fa fa-chevron-right"></i>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-1" data-slide-to="0"></li>
                      <li data-target="#carousel-1" data-slide-to="1"></li>
                      <li
                        data-target="#carousel-1"
                        data-slide-to="2"
                        class="active"
                      ></li>
                    </ol>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}
    </div>
  );
}
