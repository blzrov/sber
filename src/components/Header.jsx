import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { getUser, roles } from "../helpers/user";

export default function Header() {
  const user = getUser();
  console.log(user);

  return (
    <Navbar style={{ borderBottom: "1px solid green", marginBottom: "16px" }} collapseOnSelect expand="md">
      <Navbar.Brand>
        <Link to="/">Дом</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {user?.role === roles.applicant && (
            <Nav.Link>
              <Link to="/employers">Компании</Link>
            </Nav.Link>
          )}
          {user?.role === roles.applicant && (
            <Nav.Link>
              <Link to="/vacancys">Вакансии</Link>
            </Nav.Link>
          )}
          {user?.role === roles.applicant && (
            <Nav.Link>
              <Link to="/courses">Тесты</Link>
            </Nav.Link>
          )}
          {false && (
            <Nav.Link>
              <Link to="/applicants">Соискатели</Link>
            </Nav.Link>
          )}
          {user?.role === roles.applicant && (
            <Nav.Link>
              <Link to="/orders">Фриланс</Link>
            </Nav.Link>
          )}
          {user?.role === roles.applicant && (
            <Nav.Link>
              <Link to="/">Менторы</Link>
            </Nav.Link>
          )}
          {user && (
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
          )}
        </Nav>
        <Nav>
          {!user && (
            <Nav.Link>
              <Link to="/auth">Авторизация</Link>
            </Nav.Link>
          )}
          {user && (
            <Nav.Link>
              <Link to="/applicant/1">Профиль</Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
