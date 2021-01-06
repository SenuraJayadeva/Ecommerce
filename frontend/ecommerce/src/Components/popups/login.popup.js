import React from "react";
import LoginComponent from "../LoginComponent/login.component";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../popups/login.pop.css";

export default function LoginPopup() {
  return (
    <Popup>
      <div className="container">
        <div className="container">
          <div className="row LoginRow">
            <div className="col-md-6 text-center loginComponentColOne">
              <h1 className="textLoginColOne">UniCART</h1>
              <h3 className="textLoginColOne">LOGIN</h3>
              <hr style={{ color: "white" }} />
              <p className="textLoginColOne">Start posting your own ads</p>
              <p className="textLoginColOne">
                View and manage your ads at your convenience
              </p>
            </div>

            <div className="col-md-6 loginComponentColTwo">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
                <br />
                <a href="/">Forgot Password?</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
