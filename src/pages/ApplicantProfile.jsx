import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

export default function ApplicantProfile() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/applicant/edit")}>
        Редактировать профиль
      </Button>
      <Row>
        <Col md={3}>Картинка</Col>
        <Col md={5}>
          <h3>Личная информация</h3>
          <div>Фамилия</div>
          <div>Имя</div>
          <div>Отчество</div>
          <div>Возраст</div>
        </Col>
        <Col md={3}>
          <div>Контакты</div>
        </Col>
      </Row>
      <Row className="mb-2">
        <h3>Подробнее о вас</h3>
        <div>О себе</div>
        <div>Ваши навыки</div>
      </Row>
      <Row className="mb-2">
        <h3>Образование</h3>
        <Col md={3}>Начало обучения</Col>
        <Col md={3}>Конец обучения</Col>
        <Col md={6}>Место обучения</Col>
      </Row>
      <Row>
        <h3>Опыт работы</h3>
        <Col md={3}>Начало работы</Col>
        <Col md={3}>Конец работы</Col>
        <Col md={6}>Описание</Col>
      </Row>
    </div>
  );
}
