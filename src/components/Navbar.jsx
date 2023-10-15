import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {TfiWorld} from 'react-icons/tfi'
import redesLogo from '../assets/img/redesLogo.png'

export default function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-container">
      <Container>
        <Navbar.Brand href="#home">
            <img className="navbar-logo" src={redesLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="nav-links nav-link-rb" href="#">Home</Nav.Link>
            <Nav.Link className="nav-links nav-link-rb" href="#hero-section">
              Login
            </Nav.Link>
            <Nav.Link className="nav-links" href="#hero-section">
              Sign up
            </Nav.Link>
            <Nav.Link href="#" className="desktop">
              <TfiWorld style={{color: "#ADD8E6",}}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
