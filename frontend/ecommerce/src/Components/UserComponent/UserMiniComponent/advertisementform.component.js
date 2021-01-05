import React from "react";
import "./usercomponent.css";

export default function AdvertisementformComponent() {
  return (
    <div className="usercomponents">
      <div className="card">
        <div className="card-body">
          <h3>Fill in the details</h3>
          <hr />
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Advetisement Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Condition</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Price</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">University</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Location</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
