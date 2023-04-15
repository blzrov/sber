import { Button } from "@mantine/core";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function VacancyCard() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const response = await fetch(`http://100.73.198.48:8000/api/vacancy/${id}/`);
    const data = await response.json();
    setData(data);
  }, []);

  return (
    <div>
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center">{data.name}</h2>
          <p>Работодатель</p>
          <p>{data.salary}р./мес.</p>
          <p>{data.descr}</p>
          <Button color="green" className="w-100">
            Откликнуться
          </Button>
        </Col>
      </Row>
    </div>
  );
}
