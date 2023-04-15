import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { TextInput, Textarea, Button } from "@mantine/core";
import { getUser } from "../helpers/user";

export default function CreateVacancy() {
  const [info, setInfo] = useState({});
  async function handleSubmit() {
    const data = {...info, id: getUser().id}
    const response = await fetch("http://100.73.198.48:8000/api/vacancy/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(response)
  }

  return (
    <div>
      <h3 className="text-center">Создать новую вакансию</h3>
      <Row className="mb-4">
        <Col md={5} className="mx-auto">
          <TextInput
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="name"
            placeholder="Аналитик"
            label="Название вакансии"
          />
          <TextInput
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="salary"
            placeholder="50000"
            label="Зарплата"
          />
          <Textarea
            autosize
            multiple
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="descr"
            placeholder="Напишите подробнее о вакансии"
            label="Описание"
          />
          <Button color="green" className="mt-2" onClick={handleSubmit}>
            Опубликовать
          </Button>
        </Col>
      </Row>
    </div>
  );
}
