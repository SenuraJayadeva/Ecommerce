import React from "react";
import UserLeftComponent from "./UserMiniComponent/userleft.component";
import UserRightComponent from "./UserMiniComponent/userright.component";
export default function UserComponent() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-3">
          <UserLeftComponent />
        </div>

        <div className="col-md-9">
          <UserRightComponent />
        </div>
      </div>
    </div>
  );
}
