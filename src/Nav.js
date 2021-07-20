import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
 
const NavBar = () => {
  return (
    <div className="Nav">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Link to="/" className="App-link">
            Wiki Article Connection Analyser
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/visualize" className="App-link">
              Visualize
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/" className="App-link">
              Examples
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
 
export default NavBar;