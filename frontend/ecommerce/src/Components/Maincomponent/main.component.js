import React, { useEffect } from "react";

import HamburgerComponent from "../HamburgerComponent/hamburger.component";
import Headersection from "../HeaderSectionComponent/headersection.component";
import Herosection from "../HeroSectionComponent/herosection.component";
import CategoriesSection from "../CategoriesSectionComponent/categoriessection.component";
import FeaturedSection from "../FeaturedSectionComponent/featuredsection.component";

export default function MainComponent() {
  return (
    <div>
      <div>
        <HamburgerComponent />
      </div>

      <div>{/* <Headersection /> */}</div>
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
