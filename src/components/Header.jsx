import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand>
        <Link to="/">Дом</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/auth">Авторизация</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Работадатели</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/employer/1">employer</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/courses">courses</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/customer/1">Фриланс</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/mentor/1">Реестр соискателей</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/mentor/1">Ментор</Link>
          </Nav.Link>
          <NavDropdown title="Остальное" id="collasible-nav-dropdown">
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link to="/applicant/1">Профиль</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
