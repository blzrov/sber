import { TextInput, Button } from "@mantine/core";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function MentorEdit() {
  const [info, setInfo] = useState({});

  function handleSubmit() {
    console.log(info);
  }

  return (
    <Col className="d-flex flex-column mx-auto" style={{ gap: "20px" }} md={8}>
      <Row>
        <Col>
          <TextInput
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="name"
            label="Имя"
            placeholder="Ваше имя"
          ></TextInput>
        </Col>
        <Col>
          <TextInput
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="surname"
            label="Фамилия"
            placeholder="Ваша фамилия"
          ></TextInput>
        </Col>
        <Col>
          <TextInput
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="patronymic"
            label="Отчество"
            placeholder="Ваше отчество"
          ></TextInput>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="descr"
            label="О себе"
            placeholder="Расскажите о себе"
          ></TextInput>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="trajectory"
            label="Направление"
            placeholder="Ваше направление"
          ></TextInput>
        </Col>
        <Col>
          <TextInput
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="contacts"
            label="Контакты"
            placeholder="Оставьте ваши контакты"
          ></TextInput>
        </Col>
      </Row>
      <Button style={{alignSelf: 'center', width: '300px'}} size="md" onClick={handleSubmit}>Сохранить</Button>
    </Col>
  );
}
