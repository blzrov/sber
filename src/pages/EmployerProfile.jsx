import { Row, Col } from "react-bootstrap";
import { Image, Text, Card, SimpleGrid, Button, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EmployerProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(async () => {
    const response = await fetch(`http://100.73.198.48:8000/api/user/${id}/`);
    const data = await response.json();
    setData(data);
  }, []);

  return (
    <div>
      <Row className="mb-4">
        <Col md={5}>
          <Image />
        </Col>
        <Col md={7}>
          <Row>
            <Col>
              <Title order={1} className="mb-3">
                {data.name}
              </Title>
            </Col>
            <Col md={4} className="d-flex align-items-center">
              <Button color="green" onClick={() => navigate("/employer/edit")}>
                Редактировать профиль
              </Button>
            </Col>
          </Row>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio ullam illo facilis reprehenderit
            non quibusdam inventore debitis odit nostrum saepe, ex excepturi qui. Sunt dolor ratione ab dolores iure!
          </Text>
        </Col>
      </Row>
      <Row>
        <h2>Вакансии</h2>
        <Link to="/vacancy/new">
          <Button color="green">Добавить вакансию</Button>
        </Link>
        <SimpleGrid>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={3}>Название</Title>
            <Title order={5} mb="xs">
              З/п 10000р.
            </Title>
            <Text mb="md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus ullam maxime commodi
              impedit a asperiores eaque officia. Repudiandae cum velit iusto quas quia, earum omnis nostrum tempora qui
              labore.
            </Text>
            <Button color="green" onClick={() => navigate("/vacancy-card/1")}>
              Подробнее
            </Button>
          </Card>
        </SimpleGrid>
      </Row>
    </div>
  );
}
