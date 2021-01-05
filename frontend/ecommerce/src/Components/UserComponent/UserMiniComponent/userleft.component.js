import React from "react";
import "./usercomponent.css";

export default function UserLeftComponent() {
  return (
    <div className="container">
      <div className="row usercomponents">
        <div className="col-md-12 text-center">
          <img
            src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
        </div>

        <div className="col-md-12 text-center" style={{ marginTop: "10px" }}>
          <h5 className="userDetailsText">Senura Jayadeva</h5>
          <h6 className="userDetailsText">senurajayadeva@gmailc.com</h6>
          <h6 className="userDetailsText">University Of Sri Jayawardenapura</h6>
        </div>
      </div>
    </div>
  );
}
