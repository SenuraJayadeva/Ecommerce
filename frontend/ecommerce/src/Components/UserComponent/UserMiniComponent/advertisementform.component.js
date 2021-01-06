import React, { useState } from "react";
import FileUpload from "../../FileuploadComponent/FileUploadcomponent";
import "./usercomponent.css";

export default function AdvertisementformComponent() {
  const [ItemName, setItem] = useState("");
  const [Condition, setCondition] = useState("");
  const [Price, setPrice] = useState("");
  const [University, setUniversity] = useState("");
  const [District, setDistrict] = useState("");
  const [Town, setTown] = useState("");
  const [Description, setDescription] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const addPostData = {
    ItemName: ItemName,
    Condition: Condition,
    price: Price,
    University: University,
    District: District,
    Description: Description,
    Number: whatsapp,
    Email: email,
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(addPostData);
    console.log(images);
  };

 const images = [];


  return (
    <div className="usercomponents ">
      <div className="card adform">
        <div className="card-body">
          <h3>Fill in the details</h3>
          <hr />
          <form onSubmit={submitForm}>
            <div class="form-group">
              <label>Item Name</label>
              <input
                type="text"
                value={ItemName}
                onChange={(e) => {
                  setItem(e.target.value);
                }}
                class="form-control"
                placeholder="Enter Advertisement Title"
              />
            </div>
            <div class="form-group">
              <label>Condition</label>
              <input
                value={Condition}
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
                type="text"
                class="form-control"
                placeholder="Enter Condition"
              />
            </div>
            <div class="form-group">
              <label>Price</label>
              <input
                value={Price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="text"
                class="form-control"
                placeholder="Enter Price"
              />
            </div>
            <div class="form-group">
              <label>University</label>
              <input
                type="text"
                value={University}
                onChange={(e) => {
                  setUniversity(e.target.value);
                }}
                class="form-control"
                placeholder="Enter University"
              />
            </div>
            <div class="form-group">
              <label>District</label>
              <input
                type="text"
                value={District}
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
                class="form-control"
                placeholder="Enter District"
              />
            </div>
            <div class="form-group">
              <label>Town</label>
              <input
                type="text"
                value={Town}
                onChange={(e) => {
                  setTown(e.target.value);
                }}
                class="form-control"
                placeholder="Enter Town"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                value={Description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Enter Description"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Whatsapp</label>
              <input
                type="text"
                class="form-control"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                }}
                placeholder="Enter Number"
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <label>Upload an Image</label>
              {/* <input type="file" class="form-control" /> */}
              <FileUpload/>
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
