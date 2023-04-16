import { Row, Col } from "react-bootstrap";
import { Title, Tabs, SimpleGrid, Card, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { TextInput, Textarea, Checkbox, Group, Text, rem, MultiSelect } from "@mantine/core";
import { useState } from "react";
import { getUser } from "../helpers/user";
import { useToasts } from "react-toast-notifications";

export default function CustomerProfile() {
  const { addToast } = useToasts();
  const [info, setInfo] = useState({});

  async function onSubmit() {
    const response = await fetch("http://100.73.198.48:8000/api/user/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ ...info, id: getUser()?.id }),
    });
    addToast("Сохранено", {
      appearance: "success",
      autoDismiss: true,
    });
  }

  return (
    <div>
      <Row>
        <Col md={6}>
          <h3>Личная информация</h3>
          <TextInput
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="name"
            placeholder="Иванов"
            label="Фамилия"
          />
          <TextInput
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="surname"
            placeholder="Иван"
            label="Имя"
          />
          <TextInput
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="patronymic"
            placeholder="Иванович"
            label="Отчество"
          />
        </Col>
        <Col md={6}>
          <h3>О компании</h3>
          <TextInput
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="name2"
            placeholder="Сбер"
            label="Компания"
          />
          <TextInput
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="descr"
            placeholder="Иван"
            label="О компании"
          />
          <Button onClick={onSubmit} color="green">
            Сохранить
          </Button>
        </Col>
      </Row>
    </div>
  );
}
