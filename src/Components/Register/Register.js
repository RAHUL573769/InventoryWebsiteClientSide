import React, { useRef, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebaseinit";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../../SharedComponents/SocialLogin/SocialLogin";
import { sendPasswordResetEmail } from "firebase/auth";
const Register = () => {
  const [emailError, setEmailError] = useState();

  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const resetPassword = async (event) => {
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    alert("Sent Email");
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const agree = event.target.terms.checked;

    const confirmpassword = event.target.confirmpassword.value;

    if (agree) {
      if (password !== confirmpassword) {
        setEmailError("Passwords Donot Match!!!! ");
      } else {
        createUserWithEmailAndPassword(email, password);
      }
    }
  };

  return (
    <div className=" w-50 mx-auto">
      <h2 className="text-dark text-center mt-2">Please Register Here!!!!!</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            required
          />
        </Form.Group>

        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={agree ? "ps-2 text-dark" : " ps-2 text-danger"}
          htmlFor=""
        >
          Accept Our Terms and Conditions?{" "}
        </label>

        {emailError}
        <br />
        <Button className="my-2" variant="dark" type="submit" disabled={!agree}>
          Register
        </Button>
      </Form>
      Already Have An Account?{" "}
      <Link className="text-danger" to="/login">
        Login Here
      </Link>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
