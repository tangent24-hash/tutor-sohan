import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";
import Loading from "../Shared/Loading";
import PageTitle from "../Shared/PageTitle";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let errorElement;
  let updateErrorElement;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (updateError) {
    updateErrorElement = (
      <p className="text-danger">Error: {updateError?.message}</p>
    );
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    setAgree(false);
  };

  return (
    <div className="register-form row m-3">
      <div className="col-12 col-md-3"></div>
      <div className="col-12 col-md-6">
      <PageTitle title="Register"></PageTitle>
        <h2 style={{ textAlign: "center" }}>Please Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              required
            />
          </div>
          <div class="form-check form-check-inline">
            <input
              onClick={() => setAgree(!agree)}
              class="form-check-input"
              type="checkbox"
              id="terms"
              name="terms"
              value={agree}
            />
            <label
              className={`ps-2 form-check-label ${agree ? "" : "text-danger"}`}
              htmlFor="terms"
            >
              Accept Terms and Conditions
            </label>
          </div>
          <div className="text-center">
            <input
              disabled={!agree}
              className="mx-auto w-50 btn btn-outline-primary m-2"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        {errorElement}
        {updateErrorElement}
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>{" "}
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
