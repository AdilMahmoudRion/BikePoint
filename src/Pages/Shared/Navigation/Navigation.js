
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import useAuth from "../../../hooks/useAuth";
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { signInWithGoogle, user, logout } = useAuth();
  const imgUrl = user.photoURL;
  console.log(imgUrl)
  return (
    <div>

      <div>
        <Navbar className="navbar" sticky="top" collapseOnSelect expand="lg">
          <Container className="">
            <Navbar.Brand className="fs-3 fw-bolder text-white" href="/home">
              Bike Point
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="me-auto">
                <Link className="nav-link text-white" to="/home">
                  Home
                </Link>
                <Link className="nav-link text-white" to="/services">
                  Explore More
                </Link>
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </Nav>

              <Nav>
                <div className="userInf">

                  <p className="text-white m-0">{user.displayName}</p>

                </div>
                {user?.email ? (
                  <div className="d-flex">

                    <Link to="/dashboard" className="nav-link text-white">
                      dashboard
                    </Link>
                    <button className="button" onClick={logout}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/login" className="nav-link text-white">
                      Login
                    </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


    </div>
  );
};

export default Navigation;