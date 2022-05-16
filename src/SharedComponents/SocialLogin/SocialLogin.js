import React from "react";

import google from "../../Images/google.png";
import git from "../../Images/git.png";
import auth from "../../Firebase/Firebaseinit";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorHandle;
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  if (error || error1) {
    errorHandle = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {error1?.message}
        </p>
      </div>
    );
  }
  if (user || user1) {
    navigate("/");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 ">
          {" "}
        </div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn w-50 d-block mx-auto my-2"
        >
          {" "}
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2"> Continue With Google</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn  w-50 d-block mx-auto my-2"
        >
          {" "}
          <img style={{ width: "30px" }} src={git} alt="" />
          <span className="px-2"> Continue With GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
