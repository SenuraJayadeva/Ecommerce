import React from "react";
import "./usercomponent.css";

export default function AdvertisementformComponent() {
  return (
    <div className="usercomponents ">
      <div className="card adform">
        <div className="card-body">
          <h3>Fill in the details</h3>
          <hr />
          <form>
            <div class="form-group">
              <label>Item Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Advetisement Title"
              />
            </div>
            <div class="form-group">
              <label>Condition</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label>Price</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Price"
              />
            </div>
            <div class="form-group">
              <label>University</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter University"
              />
            </div>
            <div class="form-group">
              <label>District</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter District"
              />
            </div>
            <div class="form-group">
              <label>Town</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Town"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                placeholder="Enter Description"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Whatsapp</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Town"
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Town"
              />
            </div>
            <div class="form-group">
              <label>Upload an Image</label>
              <input type="file" class="form-control" />
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
