import React, { useRef, useState } from 'react';
import './login.scss';
import CustomButton from '../../components/customButton/customButton';
import Form from '../../components/formField/formField';
import { useAuth } from '../../context/authContext';
import { Link, useHistory } from 'react-router-dom';
import { signInWithGoogle } from '../../config/firebase';

const Login = () => {
  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to Sign In');
    }
  }
  currentUser && console.log(currentUser);
  return (
    <div className="container-fluid login__container">
      <div className="container container__body">
        <div className="split">
          <div className="split__left">
            <img
              className="split__left__img img-fluid"
              src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              alt="person"
            ></img>
            <h3 className="split__left__text">
              Don't have an account <Link to="/signup">Sign Up</Link>
            </h3>
          </div>
          <div className="split__right">
            <div className="split__right__wrapper">
              <h2
                className={
                  error ? 'split__right__text_error' : 'split__right__text'
                }
                // className="split__right__text"
              >
                Sign In
                {/* {currentUser && currentUser.email} */}
              </h2>
              {error && (
                <div class="alert alert-danger" role="alert">
                  Failed to Login
                </div>
              )}
              <form
                style={{ marginTop: 60 }}
                onSubmit={handleSubmit}
                className="split__right__signup"
              >
                <Form
                  type="email"
                  label="email"
                  placeholder="Enter email"
                  forwardRef={emailRef}
                  required
                ></Form>
                <Form
                  type="password"
                  label="password"
                  placeholder="Enter Password"
                  forwardRef={passwordRef}
                  required
                ></Form>
                <CustomButton btn="btn-primary">Sign In</CustomButton>
              </form>
              <h3 className="split__right__other">OR</h3>
              <i onClick={signInWithGoogle} class="fab fa-google-plus-g"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
