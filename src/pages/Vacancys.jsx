import { SimpleGrid, Card, Image, Title, Text, Button, TextInput, MultiSelect } from "@mantine/core";
import { async } from "q";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Vacancys() {
  const [data, setData] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://100.73.198.48:8000/api/vacancies/");
    const data = await response.json();
    setData(data);
    const response2 = await fetch("http://100.73.198.48:8000/api/skills/");
    const data2 = await response2.json();
    setSkills(
      data2.map((v) => {
        return { value: v.name, label: v.name };
      })
    );
  }, []);

  return (
    <div>
      <h3>Вакансии</h3>
      <Row>
        <Col md={4}>
          <TextInput placeholder="React" label="Поиск" radius="xs" />
          <MultiSelect data={skills} label="Навыки" placeholder="React vue" radius="xs" />
        </Col>
        <Col md={8}>
          <SimpleGrid cols={2} spacing="xl">
            {data.map((v) => (
              <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
                <Card.Section mb="xs">
                  <Image height={200} />
                </Card.Section>
                <Title order={2}>{v.name}</Title>
                <Text mb="xs">{v.salary} р/мес</Text>
                <Text mb="sm">{v.descr}</Text>
                <Link to="/vacancy-card/1">
                  <Button color="green" size="md">
                    Перейти
                  </Button>
                </Link>
              </Card>
            ))}
            {data.map((v) => (
              <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
                <Card.Section mb="xs">
                  <Image height={200} />
                </Card.Section>
                <Title order={2}>{v.name}</Title>
                <Text mb="xs">{v.salary} р/мес</Text>
                <Text mb="sm">{v.descr}</Text>
                <Link to="/vacancy-card/1">
                  <Button color="green" size="md">
                    Перейти
                  </Button>
                </Link>
              </Card>
            ))}
            {data.map((v) => (
              <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
                <Card.Section mb="xs">
                  <Image height={200} />
                </Card.Section>
                <Title order={2}>{v.name}</Title>
                <Text mb="xs">{v.salary} р/мес</Text>
                <Text mb="sm">{v.descr}</Text>
                <Link to="/vacancy-card/1">
                  <Button color="green" size="md">
                    Перейти
                  </Button>
                </Link>
              </Card>
            ))}
            {data.map((v) => (
              <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
                <Card.Section mb="xs">
                  <Image height={200} />
                </Card.Section>
                <Title order={2}>{v.name}</Title>
                <Text mb="xs">{v.salary} р/мес</Text>
                <Text mb="sm">{v.descr}</Text>
                <Link to="/vacancy-card/1">
                  <Button color="green" size="md">
                    Перейти
                  </Button>
                </Link>
              </Card>
            ))}
          </SimpleGrid>
        </Col>
      </Row>
    </div>
  );
}
