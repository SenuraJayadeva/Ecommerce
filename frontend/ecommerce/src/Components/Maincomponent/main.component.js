import React from "react";
import ScriptTag from "react-script-tag";
import $ from "jquery";

import JS1 from "../js/jquery.slicknav";
import JS2 from "../js/main";

import HamburgerComponent from "../HamburgerComponent/hamburger.component";
import Headersection from "../HeaderSectionComponent/headersection.component";
import Herosection from "../HeroSectionComponent/herosection.component";
import CategoriesSection from "../CategoriesSectionComponent/categoriessection.component";
import FeaturedSection from "../FeaturedSectionComponent/featuredsection.component";

export default function MainComponent() {
  return (
    <div>
      <ScriptTag
        type="text/javascript"
        isHydrating={true}
        src="../js/jquery-3.3.1.min.js"
      />
      <ScriptTag
        type="text/javascript"
        isHydrating={true}
        src="../js/bootstrap.min.js"
      />
      <ScriptTag type="text/javascript" src="../js/jquery.nice-select.min.js" />
      <ScriptTag
        type="text/javascript"
        isHydrating={true}
        src="../js/jquery-ui.min.js"
      />
      <ScriptTag type="text/javascript" isHydrating={true} src={JS1} />
      <ScriptTag
        type="text/javascript"
        isHydrating={true}
        src="../js/mixitup.min.js"
      />
      <ScriptTag
        type="text/javascript"
        isHydrating={true}
        src="../js/owl.carousel.min.js"
      />
      <ScriptTag type="text/javascript" isHydrating={true} src={JS2} />
      <div>
        <HamburgerComponent />
      </div>

      <div>
        <Headersection />
      </div>
      <div>
        <Herosection />
      </div>
      <div>
        <CategoriesSection />
      </div>
      <div>
        <FeaturedSection />
      </div>
    </div>
  );
}
