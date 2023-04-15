import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <Link to="/">Сбербанк</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Вакансии</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Работадатели</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Фриланс</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Тесты</Link>
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
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2}>
            <Link to="/sdhome">Профиль</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
