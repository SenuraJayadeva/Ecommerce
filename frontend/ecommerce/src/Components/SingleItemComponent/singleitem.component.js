import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

import classnames from "classnames";

export default function SingleitemComponent() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="container">
      {/* <!-- Product Details Section Begin --> */}
      <section class="product-details spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="product__details__pic">
                <div class="product__details__pic__item">
                  <img
                    class="product__details__pic__item--large"
                    src="https://static.digit.in/default/thumb_132845_default_td_480x480.jpeg?tr=w-1200"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="product__details__text">
                <h3>Samsung M2</h3>

                <div class="product__details__price">50.00 LKR</div>
                <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit
                  amet quam vehicula elementum sed sit amet dui. Proin eget
                  tortor risus.
                </p>

                <a
                  href="https://wa.me/94776621324?text=I%20am%20interested%20in%20your%20car%20for%20sale"
                  class="btn btn-info"
                  target="_blank"
                >
                  BUY
                </a>

                <ul>
                  <li>
                    <b>University</b>{" "}
                    <span>University of Sri Jayewardenepura</span>
                  </li>
                  <li>
                    <b>Availability</b> <span>In Stock</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div class="share">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-12">
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Description
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Information
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <br />
                    <Row>
                      <Col sm="12">
                        <h3>About Product </h3>
                        <p>
                          {" "}
                          Vestibulum ac diam sit amet quam vehicula elementum
                          sed sit amet dui. Pellentesque in ipsum id orci porta
                          dapibus. Proin eget tortor risus. Vivamus suscipit
                          tortor eget felis porttitor volutpat. Vestibulum ac
                          diam sit amet quam vehicula elementum sed sit amet
                          dui. Donec rutrum congue leo eget malesuada. Vivamus
                          suscipit tortor eget felis porttitor volutpat.
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Praesent sapien massa, convallis a
                          pellentesque nec, egestas non nisi. Vestibulum ac diam
                          sit amet quam vehicula elementum sed sit amet dui.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Donec velit neque,
                          auctor sit amet aliquam vel, ullamcorper sit amet
                          ligula. Proin eget tortor risus.
                        </p>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <br />
                    <Row>
                      <h3>Products Infomation </h3>
                      <p>
                        {" "}
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product Details Section End --> */}
    </div>
  );
}
