import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {Link} from "react-router-dom";


const Login = (props) => {

  const {email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError} = props;
  
const handleEmailChange =(e)=> {
  setEmail(e.target.value)
}

const handlePasswordChange =(e)=> {
  setPassword(e.target.value)
}


return (
    <div className="container-fluid login">
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">
           {hasAccount ? <p>LOGIN</p> : <p>SIGN-UP</p> } 
          </p>
        <div className="grey-text">
          <MDBInput className="login-text" label="Enter email" value={email} onChange={handleEmailChange}  icon="envelope" group type="email" validate error="wrong"
            success="right" autoFocus />
            {/* <p className="error-message">{emailError}</p> */}
          <MDBInput className="login-text" label="Enter Password"  value={password} onChange={handlePasswordChange} icon="lock" group type="password" autoFocus validate />
          {/* <p className="error-message">{passwordError}</p> */}
        </div>
        <div className="text-center">
          { hasAccount ? (
            <>
           <MDBBtn type="submit" onClick={handleLogin}  className="login-button">LOGIN</MDBBtn>
           <div className="login-route">
           <p>Don't have an account ? <sapn onClick={()=>setHasAccount(!hasAccount)} className="log">Sign up</sapn></p>
           </div>
            </>
          ):(
            <>
            <MDBBtn type="submit" onClick={handleSignup}  className="login-button">Sign up</MDBBtn>
            <div className="login-route">
            <p>Have an account ? <sapn onClick={()=>setHasAccount(!hasAccount)} className="log">Sign In</sapn></p>
            </div>
            </>
          )}
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
    </div>

);
};

export default Login;