import React, { useState } from "react";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module

import ShoopingcarouselComponent from "./shoopingcarousel.component";
import ShoppingListComponent from "./shoppinglist.component";
import CategoryaccordionComponent from "./categoryaccordion.component";

export default function ShoppinggridComponent() {
  const [price, setPrice] = useState(0);
  return (
    <div className="container">
      <div>
        <ShoopingcarouselComponent />

        <br />

        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <CategoryaccordionComponent />
              </div>

              <div
                className="col-md-12 col-sm-12"
                style={{ marginTop: "15px" }}
              >
                <div class="slidecontainer">
                  <label
                    for="customRange1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Price{" "}
                    <span id="demo" style={{ color: "blue" }}>
                      {price}
                    </span>{" "}
                    LKR
                  </label>
                  <input
                    type="range"
                    class="form-range"
                    value={price}
                    min="0"
                    max="10000"
                    step="100"
                    id="customRange1"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-sm-12">
            <ShoppingListComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
