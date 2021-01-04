import React, { useEffect } from "react";

import "./hamburgermenu.css";

export default function HamburgerComponent() {
  return (
    <div className="container">
      <nav
        class="navbar navbar-expand-lg"
        id="hamburgerNav"
        style={{ margin: "10px 0px 20px 0px", borderRadius: "10px" }}
      >
        <a class="navbar-brand" href="#" style={{ color: "wheat" }}>
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
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                Shopping
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
