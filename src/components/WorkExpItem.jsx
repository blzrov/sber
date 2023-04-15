import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

export default function WorkExpItem({ exp, onChangeExp }) {
  return (
    <Row>
      <Col md={2}>
        <MonthPickerInput
          value={exp.start}
          onChange={(e) => {
            onChangeExp({ ...exp, date_from: `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}` });
          }}
          label="Начало работы"
          placeholder="Укажите год и месяц"
        />
      </Col>
      <Col md={2}>
        <MonthPickerInput
          value={exp.end}
          onChange={(e) => {
            onChangeExp({ ...exp, date_to: `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}` });
          }}
          label="Конец работы"
          placeholder="Укажите год и месяц"
        />
      </Col>
      <Col md={8}>
        <Textarea
          value={exp.descr}
          onChange={(e) => {
            onChangeExp({ ...exp, name: e.target.value });
          }}
          autosize
          multiple
          placeholder="Расскажите про свою роль на работе и какие задачи вы выполняли"
          label="Описание"
        />
      </Col>
    </Row>
  );
}
