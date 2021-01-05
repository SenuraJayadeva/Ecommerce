import React from "react";
import "./usercomponent.css";

export default function UserLeftComponent() {
  return (
    <div className="container">
      <div className="row usercomponents">
        <div className="col-md-12 text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/senurajayadeva-394f1.appspot.com/o/senurajayadeva.jpg?alt=media&token=d7a5aeb9-596b-4879-8f29-edfd602775ff"
            style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          />
        </div>

        <div className="col-md-12 text-center" style={{ marginTop: "10px" }}>
          <h5>Senura Jayadeva</h5>
          <h6>senurajayadeva@gmailc.com</h6>
          <h6>University Of Sri Jayawardenapura</h6>
        </div>
      </div>
    </div>
  );
}
