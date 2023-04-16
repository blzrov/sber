import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { getUser, roles } from "../helpers/user";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";
import EmojiPeopleTwoToneIcon from "@mui/icons-material/EmojiPeopleTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import { Popover, Text, Button } from "@mantine/core";
import { IconBellPlusFilled } from "@tabler/icons-react";
import { Spoiler } from "@mantine/core";

export default function Header() {
  const user = getUser();

  return (
    <Navbar style={{ borderBottom: "1px solid green", marginBottom: "16px" }} collapseOnSelect expand="md">
      <Navbar.Brand>
        <Link to="/">
          <HomeIcon /> Главная
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* {user?.role === roles.applicant && (
            <Nav.Link>
              <Link to="/employers">
                <LocationCityIcon /> Компании
              </Link>
            </Nav.Link>
          )} */}
          {user?.role === roles.applicant && (
            <Nav.Link>
              <Link to="/vacancies">
                <WorkTwoToneIcon /> Вакансии
              </Link>
            </Nav.Link>
          )}
          {user?.role === roles.employer && (
            <Nav.Link>
              <Link to="/applicants">
                <EmojiPeopleTwoToneIcon /> Соискатели
              </Link>
            </Nav.Link>
          )}
          {(user?.role === roles.applicant || user?.role === roles.employer) && (
            <Nav.Link>
              <Link to="/courses">
                <QuizTwoToneIcon /> Тесты
              </Link>
            </Nav.Link>
          )}

          {user?.role === roles.applicant && (
            <Nav.Link>
              <Link to="/orders">
                <PriceChangeIcon /> Фриланс
              </Link>
            </Nav.Link>
          )}
          {user?.role === roles.applicant && (
            <Nav.Link>
              <Link to="/mentors">
                <SupportAgentIcon /> Менторы
              </Link>
            </Nav.Link>
          )}
          {/* {user && (
            <NavDropdown title="Остальное" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/employer/1">Работадатель</Link>
              </NavDropdown.Item>
              <Link to="/employer/1">
                <NavDropdown.Item>Работадатель</NavDropdown.Item>
              </Link>
              <NavDropdown.Item>
                <Link to="/mentor/1">Ментор</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/customer/1">Заказчик</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          )} */}
        </Nav>
        <Nav>
          {user && (
            <Nav.Link style={{ paddingBottom: "8px" }}>
              <Popover width={600} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Button variant="white" leftIcon={<IconBellPlusFilled />}>
                    + 5
                  </Button>
                </Popover.Target>
                <Popover.Dropdown>
                  <Spoiler maxHeight={24} showLabel="Прочитать полностью" hideLabel="Скрыть">
                    <Text size="sm">
                      This is uncont uncontrolled popover, it is opened when button uncontrolled popover, it is opened
                      when button rolled popover, it is opened when button is clicked
                    </Text>
                  </Spoiler>
                  <hr />
                  <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
                  <hr />
                  <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
                  <hr />
                  <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
                  <hr />
                  <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
                  <hr />
                </Popover.Dropdown>
              </Popover>
            </Nav.Link>
          )}
          {!user && (
            <Nav.Link>
              <Link to="/auth">Авторизация</Link>
            </Nav.Link>
          )}
          {user && (
            <Nav.Link>
              {user.role === roles.applicant && (
                <Link to={`/applicant/${user.id}`}>
                  <AccountBoxIcon /> Профиль
                </Link>
              )}
              {user.role === roles.customer && (
                <Link to="/customer/1">
                  <ManageAccountsTwoToneIcon /> Управление
                </Link>
              )}
              {user?.role === roles.employer && (
                <Link to={`/employer/${user.id}`}>
                  <ManageAccountsTwoToneIcon /> Управление
                </Link>
              )}
              {user?.role === roles.mentor && (
                <Link to="/mentor/1">
                  <ManageAccountsTwoToneIcon /> Управление
                </Link>
              )}
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
