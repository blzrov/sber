import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar style={{ borderBottom: "1px solid green", marginBottom: "16px" }} collapseOnSelect expand="md">
      <Navbar.Brand>
        <Link to="/">Дом</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Все вакансии</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Компании</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/courses">Тесты</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/applicants">Соискатели</Link>
          </Nav.Link>
          <NavDropdown title="Остальное" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/employer/1">Работадатель</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/mentor/1">Ментор</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/customer/1">Заказчик</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link to="/auth">Авторизация</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/applicant/1">Профиль</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
