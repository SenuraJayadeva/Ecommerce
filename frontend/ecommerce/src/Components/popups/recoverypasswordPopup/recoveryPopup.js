import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import "../login.pop.css";

export default function RecoveryPopup() {
 const [email , setEmail] = useState("");
 const [password ,setPassword] = useState("");
 const [rePassword , setRePassword] = useState("");

 const loginData = {
   userEmail : email,
   newPassword : password,
   recoveryPassword : rePassword,
 }

 const submitForm = (e)=>{
   e.preventDefault();
   console.log(loginData);
 }

  return (  
      <div className="container">
        <div className="container">
          <div className="row LoginRow">
            <div className="col-md-6 text-center loginComponentColOne">
             <h1 className="textLoginColOne d-none d-md-block">UniCART</h1>          
              <h3 className="textLoginColOne">Recover Account</h3>
              <hr style={{ color: "white" }} />
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
                    placeholder="Enter Email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">New Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value);
                    }}
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter New Password"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword2">Re-enter Password</label>
                  <input
                    type="password"
                    value={rePassword}
                    onChange={(e)=>{
                      setRePassword(e.target.value);
                    }}
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Re-enter New Password"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

  );
}
