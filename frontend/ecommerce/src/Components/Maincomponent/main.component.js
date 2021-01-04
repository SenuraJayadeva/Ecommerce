import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HamburgerComponent from "../HamburgerComponent/hamburger.component";
import FooterComponent from "../FooterSectionComponent/footer.component";

import HomePageComponent from "../HomePageComponent/HomePage.component";
import SingleitemComponent from "../SingleItemComponent/singleitem.component";

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
        <div>
          <Route path="/item" exact component={SingleitemComponent} />
        </div>
      </Router>

      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
