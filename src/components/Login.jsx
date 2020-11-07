import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {Link} from "react-router-dom";
const Login = () => {

  const [email,setEmail]=useState("Enter Email");
  const [password,setPassword]=useState("Enter Password");
return (
    <div className="container-fluid login">
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">SIGN-IN</p>
        <div className="grey-text">
          <MDBInput className="login-text" label={email} icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput className="login-text" label={password} icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn className="login-button">Sign in</MDBBtn>
          {/* <Link to="/"><MDBBtn className="signup-button" color="info">Register</MDBBtn></Link> */}
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
    </div>

);
};

export default Login;