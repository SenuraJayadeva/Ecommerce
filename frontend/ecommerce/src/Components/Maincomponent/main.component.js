import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HamburgerComponent from "../HamburgerComponent/hamburger.component";
import FooterComponent from "../FooterSectionComponent/footer.component";
import HomePageComponent from "../HomePageComponent/HomePage.component";

export default function MainComponent() {
  return (
    <div>
      <div>
        <HamburgerComponent />
      </div>

      <Router>
        <div>
          <Route path="/" exact component={HomePageComponent} />
        </div>
      </Router>

      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
