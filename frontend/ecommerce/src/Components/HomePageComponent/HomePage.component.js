import React from "react";

import Herosection from "../HeroSectionComponent/herosection.component";
import CategoriesSection from "../CategoriesSectionComponent/categoriessection.component";
import FeaturedSection from "../FeaturedSectionComponent/featuredsection.component";

export default function HomePageComponent() {
  return (
    <div>
      <div>
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
    </div>
  );
}
