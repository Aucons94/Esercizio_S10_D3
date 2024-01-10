import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    showProfile: false,
  };
  render() {
    return (
      <>
        <header className="sticky-top">
          <Navbar expand="lg" className="bg-custom navbar-dark">
            <Container fluid>
              <Navbar.Brand href="#">
                <img src="./assets/images/netflix_logo.png" alt="neflix_logo" width="100px" className="navImg" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/" className="nav-link">
                    Tv Show
                  </NavLink>
                  <NavLink to="/settings" className="nav-link">
                    Movies
                  </NavLink>
                  <NavLink to="/profile" className="nav-link">
                    Recently Added
                  </NavLink>
                  <NavLink to="#" className="nav-link">
                    My list
                  </NavLink>
                </Nav>
                <Nav>
                  <div className="d-flex text-light">
                    <button className="bg-custom text-light border border-0 mx-2">
                      <Search />
                    </button>
                    <p className="text-light fw-bold my-0 mx-1 align-self-center">KIDS</p>
                    <button className="bg-custom text-light border border-0 mx-2">
                      <Bell />
                    </button>

                    <img
                      src="./assets/images/avatar.png"
                      alt="profile_avatar"
                      width="35px"
                      height="35px"
                      className="right-icons"
                    />

                    <button className="bg-custom text-light border border-0 ms-2">
                      <PersonCircle className="fs-4" />
                    </button>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Header;
