import React, { useState } from "react";
import LoginComponent from "../LoginComponent/login.component";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../popups/login.pop.css";
// import RecoveryPopup from "../recoverypasswordPopup/recoveryPopup";
import RecoveryPopup from "./recoverypasswordPopup/recoveryPopup";

export default function LoginPopup() {
 const [email , setEmail] = useState("");
 const [password ,setPassword] = useState("");

 const loginData = {
   userEmail : email,
   userPassword : password
 }

 const submitForm = (e)=>{
   e.preventDefault();
   console.log(loginData);
 }

  return (  
      <div className="container" close>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center loginComponentColOne">
             <h1 className="textLoginColOne d-none d-md-block">UniCART</h1>          
              <h3 className="textLoginColOne">LOGIN</h3>
              <hr style={{ color: "white" }} />
              <p className="textLoginColOne">Start posting your own ads</p>
              <p className="textLoginColOne">
                View and manage your ads at your convenience
              </p>
            </div>

            <div className="col-md-6 loginComponentColTwo">
              <form onSubmit={submitForm}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value);
                    }}
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
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value);
                    }}
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit"  class="btn btn-primary Forgot">
                  Submit
                </button>
                <br />  
                <Popup class="popup-content" modal trigger={<span >Forgot Password?</span>}>
                <RecoveryPopup/>
              </Popup>
              </form>
            </div>
          </div>
        </div>
      </div>

  );
}
