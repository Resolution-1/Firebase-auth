import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import {Link} from "react-router-dom";




const Signup = () => {

  const [name,setName] = useState("Enter Name");
  const [email,setEmail]=useState("Enter Email");
  const [password,setPassword]=useState("Enter Password");
  const handleSubmit = ()=> {
  
  }
  

    return ( 
        <div className="container-fluid sign-up">
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form  className="needs-validation" noValidate>
        <p className="h5 text-center mb-4">SIGN-UP</p>
        <div className="grey-text">
          <MDBInput
            label={name}
            icon="user"
            group
            type="text"
            validate
            error="true"
            success="right"
            required
          />
          <MDBInput
            label={email}
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
            required
          />

          <MDBInput
            label={password}
            icon="lock"
            group
            type="password"
            validate
            required
          />
        </div>
        <div className="buttons">
          <MDBBtn onSubmit={handleSubmit} className="signup-button" color="danger">Register</MDBBtn>
        </div>
        <div className="login-route">
          <p>Already have an account ? <Link to="/login"><sapn className="log">Login</sapn></Link></p>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
     );
}
 
export default Signup;
