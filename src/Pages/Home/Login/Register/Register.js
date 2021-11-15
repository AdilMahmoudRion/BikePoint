import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import login from "../../../Shared/Images/banner.jpg";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError, signInWithGoogle } =
    useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <div className="body">
          <div className="form-container">
            {!isLoading && (
              <form
                id="contact"
                action=""
                method="post"
                onSubmit={handleLoginSubmit}
              >
                <h3>Registration from</h3>

                <fieldset>
                  <input
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onBlur={handleOnBlur}
                    placeholder="Your name"
                    type="text"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    placeholder="Your Email Address"
                    tabindex="2"
                    required
                  />
                </fieldset>

                <fieldset>
                  <input
                    placeholder="Type Password"
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    tabindex="3"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    placeholder="Type Password"
                    id="standard-basic"
                    label="ReType Your Password"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    tabindex="4"
                    required
                  />
                </fieldset>

                <fieldset>
                  <button
                    name="submit"
                    type="submit"
                    id="contact-submit"
                    data-submit="...Sending"
                  >
                    Register
                  </button>
                </fieldset>
                <fieldset>
                  <button
                    name="submit"
                    type="submit"
                    className="signInUsingGoogle"
                    onClick={signInWithGoogle}
                  >
                    Sign With Google
                  </button>
                </fieldset>
                <fieldset>
                  <NavLink style={{ textDecoration: "none" }} to="/login">
                    <Button variant="text">
                      Already Registered? Please Login
                    </Button>
                  </NavLink>
                </fieldset>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
