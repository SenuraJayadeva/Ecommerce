import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import LoginComponent from "../LoginComponent/login.component";
import LoginPopup from "../popups/login.popup";

import "./hamburgermenu.css";

export default function HamburgerComponent() {
  return (
    <div className="container">
      <nav
        class="navbar navbar-expand-lg navbar-light"
        id="hamburgerNav"
        style={{ margin: "10px 0px 20px 0px", borderRadius: "10px" }}
      >
        <a
          class="navbar-brand"
          href="#"
          style={{ color: "wheat", fontWeight: "bolder" }}
        >
          UniCART
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            class="navbar-toggler-icon"
            style={{ backgroundColor: "wheat", borderRadius: "50%" }}
          ></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/shopping" style={{ color: "white" }}>
                Shopping
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/user" style={{ color: "white" }}>
                Post Your Ad
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ">
            <li class="nav-item my-2 my-lg-0">
              <a class="nav-link" style={{ color: "white" }}>
                <i class="fas fa-sign-in-alt"></i> &nbsp;{" "}
                <Popup
                  style={{ background: "red" }}
                  modal
                  trigger={<button class="btn btn-primary ">Login</button>}
                >
                  <LoginPopup />
                </Popup>
              </a>
            </li>
            <li class="nav-item my-2 my-lg-0">
              <a class="nav-link" href="/signup" style={{ color: "white" }}>
                <i class="fas fa-user-plus"></i> &nbsp; Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
