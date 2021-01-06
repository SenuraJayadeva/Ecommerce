import React from "react";
import { Link } from "react-router-dom";

import "./categoryaccordion.css";

export default function CategoryAccordion() {
  return (
    <div>
      <div
        class="accordion"
        id="accordionExample"
        style={{ backgroundColor: "#EAEAEA" }}
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Eletronics
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul className="categotyUL">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Mobile Phone Accessories</Link>
                </li>
                <li>
                  <Link>Computer And Laptop Accessories</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
                <li>
                  <Link>Power Banks</Link>
                </li>
                <li>
                  <Link>SD Card And Pen Drive</Link>
                </li>
                <li>
                  <Link>Others</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Fashion & Beauty
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {" "}
              <ul className="categotyUL">
                <li>
                  <Link>Beauty Products</Link>
                </li>
                <li>
                  <Link>Clothes</Link>
                </li>
                <li>
                  <Link>Watches</Link>
                </li>
                <li>
                  <Link>Jewellery</Link>
                </li>
                <li>
                  <Link>Shoes </Link>
                </li>
                <li>
                  <Link>Other Fashion Items</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accessories
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {" "}
              <ul className="categotyUL">
                <li>
                  <Link>Pencil Case</Link>
                </li>
                <li>
                  <Link>Stationary Items</Link>
                </li>
                <li>
                  <Link>Add</Link>
                </li>
                <li>
                  <Link>Add</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Services
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {" "}
              <ul className="categotyUL">
                <li>
                  <Link>Event And Entertainments</Link>
                </li>
                <li>
                  <Link>Add something</Link>
                </li>
                <li>
                  <Link>Add Something</Link>
                </li>
                <li>
                  <Link>Add Something</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Vehicles
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {" "}
              <ul className="categotyUL">
                <li>
                  <Link>Bikes</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              University
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {" "}
              <ul className="categotyUL">
                <li>
                  <Link>J'pura</Link>
                </li>
                <li>
                  <Link>Colombo</Link>
                </li>
                <li>
                  <Link>Mora</Link>
                </li>
                <li>
                  <Link>Kelani</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
