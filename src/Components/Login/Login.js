import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebaseinit";
import { useAuthState } from "react-firebase-hooks/auth";
import SocialLogin from "../../SharedComponents/SocialLogin/SocialLogin";

import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import axios from "axios";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  let errorHandle;

  let navi = useNavigate();
  const navigateToRegister = (event) => {
    navi("/register");
  };

  const [signInWithEmailAndPassword, signInUser, signInloading, signInerror] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [user, loading, error] = useAuthState(auth);

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Reset Email Sent");
    } else {
      toast("please enter your email address");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    await signInWithEmailAndPassword(email, password);

    // const { data } = await axios.post("");
  };

  if (user) {
    navigate(from, { replace: true });
  }
  if (signInerror) {
    errorHandle = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {signInerror?.message}
        </p>
      </div>
    );
  }

  return (
    <div className=" w-50 mx-auto">
      <h2 className="text-dark text-center mt-2 ">Please Login!!!!!</h2>
      <Form className="register-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      {errorHandle}
      <br />
      New to Laptop Inventory?{" "}
      <Link
        to="/register"
        className="text-danger pe-auto text-decoration-none"
        onClick={navigateToRegister}
      >
        Please Register
      </Link>{" "}
      <p>
        Forget Password?{" "}
        <button
          className="btn text-danger btn-link pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Click Here
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
