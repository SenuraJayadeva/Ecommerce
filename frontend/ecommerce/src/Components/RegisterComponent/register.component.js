import React from "react";

import "./register.css";

export default function RegisterComponent() {
  return (
    <div className="container">
      <div className="container">
        <div className="row RegisterRow">
          <div className="col-md-6 text-center RegisterComponentColOne">
            <h1 className="textRegisterColOne">UniCART</h1>
            <h3 className="textRegisterColOne">Register</h3>
            <br />
            <p className="textRegisterColOne">Start posting your own ads</p>
            <p className="textRegisterColOne">
              View and manage your ads at your convenience
            </p>
          </div>

          <div className="col-md-6 RegisterComponentColTwo">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">University</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your university"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Renter password"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Sign Up
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
