import { Button } from "@mantine/core";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function VacancyCard() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const response = await fetch(`http://100.73.198.48:8000/api/vacancy/:${id}`);
    const data = await response.json();
    setData(data);
  }, []);

  return (
    <div>
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center">Название вакансии</h2>
          <p>Работодатель</p>
          <p>50000р./мес.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, reprehenderit in harum at quo, consectetur
            neque cum quia fuga fugit dicta facere quasi quidem? Laboriosam eveniet totam harum repellat tenetur.
          </p>
          <Button color="green" className="w-100">
            Откликнуться
          </Button>
        </Col>
      </Row>
    </div>
  );
}
