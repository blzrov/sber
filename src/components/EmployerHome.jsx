import { Row, Col } from "react-bootstrap";
import { Card, Badge } from "@mantine/core";
import { useEffect, useState } from "react";
import EmployerTests from "./EmployerTest";

export default function EmployerHome() {
  const [applicants, setApplicants] = useState([]);
  const [tests, setTests] = useState([])
  useEffect(async () => {
    const response = await fetch(
      "http://100.73.198.48:8000/api/users/applicants"
    );
    const data = await response.json();
    setApplicants(data);
  }, []);

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
            <h2 className="text-center mb-4">Возможно вам подойдут</h2>
            {applicants.map((v) => (
                <EmployerTests applicant={v} id={v.id}/>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
