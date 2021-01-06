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
  const [passwordErr, setPasswordErr] = useState({});
  const [cPasswordErr, setcpasswordErr] = useState({});

  const registerData = {
    FNAME: fullName,
    EMAIL: email,
    UNIVERSITY: University,
    PASSWORD: password,
    CPASSWORD: confirmPassword,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
     const isValid = formValidation();
  };

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const passwordErr = {};
    const cpassowrdErr = {};
    let isValid = true;

    if (!fullName.includes("123")) {
      nameErr.nameInvalid = "Not Valid!";
      isValid = false;
    }
    // var emailRegex = /^[w-.]+@([w-]+.)+[w-]{2,4}$/;
    // if (email.match(ema))) {
    //   emailErr.emailInvalid = "Not Valid!";
    //   isValid = false;
    // }
    var pwRegex = /^[A-Za-z]\w{7,14}$/;
    if (password.match(pwRegex)) {
      passwordErr.passwordInvalid = "Not Valid!";
      isValid = false;
    }
    if (confirmPassword === password) {
      cpassowrdErr.notEqual = "Not Equal With Above You Entered!";
      isValid = false;
    }

    setNameErr(nameErr);
    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    setcpasswordErr(cpassowrdErr);
  };

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
                    console.log(e.target.value);
                    const nameWord = e.target.value;
                    const wordArray = nameWord.split("");
                    wordArray.map((singleWord) => {
                      if (!Number(singleWord)) {
                        setName(e.target.value);
                      } else {
                        alert("Cannot contain numbers");
                        setName(fullName);
                      }
                      console.log("word" + singleWord);
                    });
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
              {Object.keys(emailErr).map((key) => {
                return <div style={{ color: "red" }}>{emailErr}</div>;
              })}
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
              {Object.keys(passwordErr).map((key) => {
                return <div style={{ color: "red" }}>{passwordErr}</div>;
              })}
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
              {Object.keys(cPasswordErr).map((key) => {
                return <div style={{ color: "red" }}>{cPasswordErr}</div>;
              })}

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
