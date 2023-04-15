import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { TextInput, Textarea, Checkbox, Button, Group, Text, rem, MultiSelect } from "@mantine/core";

export default function CreateVacancy() {
  const [info, setInfo] = useState({});
  function handleSubmit() {
    console.log(info);
  }

  return (
    <div>
      <h3>Создать новую вакансию</h3>
      <Row className="mb-4">
        <Col>
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
          <Button color="green" onClick={handleSubmit}>
            Опубликовать
          </Button>
        </Col>
      </Row>
    </div>
  );
}
