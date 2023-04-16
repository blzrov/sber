import { Row, Col } from "react-bootstrap";
import { Card, Badge } from "@mantine/core";

export default function EmployerHome() {
  return (
    <div>
      <Row>
        <Col md={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2 className="text-center mb-4">Новые отклики</h2>
            <Card
              style={{ cursor: "pointer" }}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="d-flex justify-content-between align-items-center"
            >
              <h4 style={{ color: "green", fontWeight: "600" }}>React-разработчик</h4>
              <h4 style={{ color: "green", fontWeight: "600" }}>+12</h4>
            </Card>
          </Card>
        </Col>
        <Col md={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2 className="text-center mb-4">Подходящие кандидаты</h2>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <h4 className="text-center mb-3">Белозеров Денис Батькович</h4>
              <Row>
                <Col md={2}>
                  <h5>Навыки:</h5>
                </Col>
                <Col md={10} className="d-flex" style={{ gap: 10 }}>
                  {["HTML", "CSS", "React"].map((v) => (
                    <Badge size="lg">{v}</Badge>
                  ))}
                </Col>
              </Row>
              <Row>
                <h5>Пройденные тесты:</h5>
                <Col>
                  <Row>
                    <Col md={4}>Frontend-разработчик:</Col>
                    <Col md={8}>86%</Col>
                  </Row>
                  <Row>
                    <Col md={4}>Backend-разработчик:</Col>
                    <Col md={8}>100%</Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
