import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../helpers/user";

export default function ApplicantProfile() {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await fetch(`http://100.73.198.48:8000/api/user/${id}`);
    const data = await response.json();
    setInfo(data);
    console.log(data)
  }, []);

  return (
    <div>
      <Row>
        <Col md={4}>Картинка</Col>
        <Col md={8}>
          <div className="d-flex justify-content-between">
            <h3>Личная информация</h3>
            {getUser().id == id && <Button onClick={() => navigate("/applicant/edit")}>Редактировать профиль</Button>}
          </div>
          <div style={{fontSize: '20px'}}>{`${info.surname} ${info.name} ${info.patronymic}`}</div>
          <div style={{color: 'gray'}}>Возраст</div>
        </Col>
      </Row>
      <Row className="mb-2">
        <h3>Подробнее о вас</h3>
        <div><b>О себе:</b> {info.descr}</div>
        <div><b>Ваши навыки:</b></div>
        <div><b>Город:</b> {info.city}</div>
        <div><b>Профессия:</b> {info.profession}</div>
      </Row>
      <Row className="mb-2">
        <h3>Образование</h3>
        <Col md={3}>Начало обучения</Col>
        <Col md={3}>Конец обучения</Col>
        <Col md={6}>Место обучения</Col>
      </Row>
      <Row className="mb-2">
        <h3>Опыт работы</h3>
        <Col md={3}>Начало работы</Col>
        <Col md={3}>Конец работы</Col>
        <Col md={6}>Описание</Col>
      </Row>
    </div>
  );
}
