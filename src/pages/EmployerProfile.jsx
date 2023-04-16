import { Row, Col } from "react-bootstrap";
import { Image, Text, Card, SimpleGrid, Button, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../helpers/user";

export default function EmployerProfile() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(async () => {
    const response = await fetch(`http://100.73.198.48:8000/api/user/${id}`);
    const data = await response.json();
    const response2 = await fetch(`http://100.73.198.48:8000/api/user/${id}/vacancies`);
    const data2 = await response2.json();
    data.vacancies = data2;
    setData(data);
  }, []);

  return (
    <div>
      <Row className="mb-4">
        <Col md={3}>
          <img height={150} src={data.img} />
        </Col>
        <Col md={9}>
          <div className="d-flex justify-content-between">
            <h1 className="mb-3">{data.name}</h1>
            {getUser()?.id == id && (
              <Link to="/employer/edit">
                <Button variant="light">Редактировать профиль</Button>
              </Link>
            )}
          </div>
          <Text>{data.descr}</Text>
        </Col>
      </Row>
      <Row>
        <div className="d-flex align-items-center">
          <h2 className="pe-3">Вакансии</h2>
          {getUser()?.id == id && (
            <Link to="/vacancy/new">
              <Button variant="light" compact>
                Добавить вакансию
              </Button>
            </Link>
          )}
        </div>
        <SimpleGrid>
          {data?.vacancies?.map((e, i) => (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{e.name}</Title>
              <Title order={5} mb="xs">
                {e.salary} руб/мес
              </Title>
              <Text mb="md">{e.descr}</Text>
              <Link to={`/vacancy-card/${e.id}`}>
                <Button color="green">Подробнее</Button>
              </Link>
            </Card>
          ))}
        </SimpleGrid>
      </Row>
    </div>
  );
}
