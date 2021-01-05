import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HamburgerComponent from "../HamburgerComponent/hamburger.component";
import FooterComponent from "../FooterSectionComponent/footer.component";

import HomePageComponent from "../HomePageComponent/HomePage.component";
import SingleitemComponent from "../SingleItemComponent/singleitem.component";
import ShoppinggridComponent from "../ShoppingGridComponent/shoppinggrid.component";
import LoginComponent from "../LoginComponent/login.component";
import RegisterComponent from "../RegisterComponent/register.component";
import UserComponent from "../UserComponent/user.component";
import loginPopup from "../popups/login.popup";

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
          {/* <Route path="/login" exact component={loginPopup} /> */}
        </div>
        <div>
          <Route path="/signup" exact component={RegisterComponent} />
        </div>
        <div>
          <Route path="/user" exact component={UserComponent} />
        </div>
        <div>
          <Route path="/item" exact component={SingleitemComponent} />
        </div>
        <div>
          <Route path="/shopping" exact component={ShoppinggridComponent} />
        </div>
      </Router>

      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
