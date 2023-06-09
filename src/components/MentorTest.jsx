import { useEffect, useState } from "react";
import {Row, Col} from 'react-bootstrap'
import {Card, Badge} from '@mantine/core'
import {BASE_URL} from "../api";

export default function MentorTest({ applicant, id }) {
  const [tests, setTests] = useState([]);
  useEffect(async () => {
    const response = await fetch(
      `${BASE_URL}/api/test/user/${id}`
    );
    const data = await response.json();
    console.log(data)
    setTests(data.tests);
  }, []);

  return (
    <div>
      {tests.map((v) => ( !v.is_passed ?
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
            <Row style={{backgroundColor: 'rgba(255,0,0,0.35)', borderRadius: '10px', padding: '5px', marginTop: '5px'}}>
                <Col className="d-flex align-items-center" md={9}><b>{v.name}:</b></Col>
                <Col className="d-flex align-items-center" md={3}><span>Провален</span></Col>
            </Row>
        </Card> : <></>
      ))}
    </div>
  );
}
