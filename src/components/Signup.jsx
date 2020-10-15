import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

const Signup = () => {
    return ( 
        <div className="container-fluid sign-up">
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">SIGN-UP</p>
        <div className="grey-text">
          <MDBInput
            label="Your name"
            icon="user"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="Your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
          />

          <MDBInput
            label="Your password"
            icon="lock"
            group
            type="password"
            validate
          />
        </div>
        <div className="buttons">
          <MDBBtn className="signup-button" color="danger">Register</MDBBtn>
          <MDBBtn className="signup-button" color="info">Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
     );
}
 
export default Signup;
