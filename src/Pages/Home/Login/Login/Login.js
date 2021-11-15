import { Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import './Login.css'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
         

            <div>
                <div className="body">
                    <div className="form-container">
                        <form id="contact" onSubmit={handleLoginSubmit}>
                            <h3>Login Form</h3>
                            <fieldest>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                            </fieldest>

                            <fieldset>
                                <input
                                    label="Your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                    placeholder="Your Email Address"
                                    type="email"
                                    tabindex="2"
                                    required
                                />
                            </fieldset>

                            <fieldset>
                                <input
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
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
                                    Submit
                                </button>
                            </fieldset>
                            <fieldset>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <Button variant="text">New User? Please Register</Button>
                                </NavLink>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;