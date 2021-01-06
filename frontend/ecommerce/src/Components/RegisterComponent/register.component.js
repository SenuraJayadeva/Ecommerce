import React, { useState } from "react";

import "./register.css";

export default function RegisterComponent() {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [University, setUniversity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmation] = useState("");
  //validations
  const [fNameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});

  const registerData = {
    FNAME: fullName,
    EMAIL: email,
    PASSWORD: password,
    CPASSWORD: confirmPassword,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
  };

  // onChange = (e) => {
  //     if(!Number(e.target.value)){
  //         setName(e.target.value);
  //         alert("Error");
  //     }
  // }

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
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    if (!Number(e.target.value)) {
                      setName(e.target.value); 
                    }
                    else{
                      alert("Error);
                    }
                  
                  }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  class="form-control"
                  placeholder="Enter your full name"
                />
              </div>
              {/* {Object.keys(fNameErr).map((key)=>{
                return <div style={{color :"red"}}>{fNameErr[key]}</div>
              })} */}
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">University</label>
                <input
                  type="text"
                  class="form-control"
                  value={University}
                  onChange={(e) => {
                    setUniversity(e.target.value);
                  }}
                  placeholder="Enter your university"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmation(e.target.value);
                  }}
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
