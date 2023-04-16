import { Row, Col } from "react-bootstrap";
import { Card, Button } from "@mantine/core";

export default function MentorHome() {
  return (
    <div>
      <Row>
        <Col>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2 className="text-center mb-4">Соискатели</h2>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Row>
                <Col md={8}>
                  <h4>Фамилия Имя Отчество</h4>
                  <p>
                    <b>Направление:</b> Frontend-разработка
                  </p>
                  <p>
                    <b>Результаты теста:</b> 66%
                  </p>
                </Col>
                <Col className="d-flex align-items-center">
                  <Button style={{width: '200px'}} size="md" color="green">
                    Связаться
                  </Button>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
