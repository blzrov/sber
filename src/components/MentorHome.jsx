import { Row, Col } from "react-bootstrap";
import { Card, Button } from "@mantine/core";
import { useState, useEffect } from "react";
import MentorTest from './MentorTest'
import {BASE_URL} from "../api";

export default function MentorHome() {
  const [applicants, setApplicants] = useState([]);
  useEffect(async () => {
    const response = await fetch(
      `${BASE_URL}/api/users/applicants`
    );
    const data = await response.json();
    setApplicants(data);
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2 className="text-center mb-4">Ищут ментора</h2>
            {applicants.map((v) => (
                <MentorTest applicant={v} id={v.id}/>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
