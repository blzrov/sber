import { Row, Col } from "react-bootstrap";
import { Card, MantineProvider } from "@mantine/core";

export default function ApplicantHome() {
  return (
    <div>
      <Row className="my-5">
        <Col>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h3>Мои достижения</h3>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            shadow="sm"
            className="d-flex flex-column-reverse align-items-center"
            padding="lg"
            radius="md"
            withBorder
            style={{
              background: "linear-gradient(70deg ,#F5F186, #FCD000)",
              height: "200px",
              cursor: 'pointer'
            }}
          >
            <h3>12 работодателей ищут сотрудников!</h3>
          </Card>
        </Col>
        <Col>
          <Card
            shadow="sm"
            className="d-flex flex-column-reverse align-items-center"
            padding="lg"
            radius="md"
            withBorder
            style={{
              background: "linear-gradient(to left ,#9DFBC8, #FCD000)",
              height: "200px",
              cursor: 'pointer'
            }}
          >
            <h3>Фриланс!</h3>
          </Card>
        </Col>
        <Col>
          <Card
            shadow="sm"
            className="d-flex flex-column-reverse align-items-center"
            padding="lg"
            radius="md"
            withBorder
            style={{
              background: "linear-gradient(70deg ,#9DFBC8, #98DE5B)",
              height: "200px",
              cursor: 'pointer'
            }}
          >
            <h3>Проверь свои навыки!</h3>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
