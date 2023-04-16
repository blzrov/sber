import { useEffect, useState } from "react";
import {Row, Col} from 'react-bootstrap'
import {Card, Badge} from '@mantine/core'

export default function EmployerTests({ applicant, id }) {
  const [tests, setTests] = useState([]);
  useEffect(async () => {
    const response = await fetch(
      `http://100.73.198.48:8000/api/test/user/${id}`
    );
    const data = await response.json();
    console.log(data, id, applicant)
    setTests(data.tests);
  }, []);

  return (
    <div>
      {tests.map((v) => ( v.is_passed ?
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h4 className="text-center mb-3">
            {applicant.name} {applicant.surname} {applicant.patronymic}
            </h4>
            <Row>
            <Col md={2}>
                <h5>Навыки:</h5>
            </Col>
            <Col md={10} className="d-flex" style={{ gap: 10 }}>
                {["HTML", "CSS", "React"].map((v, i) => (
                <Badge size="lg" key={i}>
                    {v}
                </Badge>
                ))}
            </Col>
            </Row>
            <Row>
            <Col md={6}><b>{v.name}</b></Col>
            <Col md={4}>{v.is_passed ? <p>Успешно</p> : <p style={{color: 'crimson'}}>Недостаточно баллов</p>}</Col>
            </Row>
        </Card> : <></>
      ))}
    </div>
  );
}
