import { SimpleGrid, Card, Image, Title, Text, Button, TextInput, MultiSelect } from "@mantine/core";
import { async } from "q";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Vacancys() {
  const [data, setData] = useState([]);
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState("");

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
      <Row>
        <Col md={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h3>Вакансии</h3>
            <TextInput
              size="lg"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="React"
              label="Поиск"
              radius="xs"
            />
            {/* <MultiSelect data={skills} label="Навыки" placeholder="React vue" radius="xs" /> */}
          </Card>
        </Col>
        <Col md={8}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <SimpleGrid cols={2} spacing="xl">
              {data
                ?.filter((e) => e.name?.includes(search) || e.descr?.includes(search))
                .map((v) => (
                  <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
                    <Card.Section mb="xs">
                      <Image height={200} />
                    </Card.Section>
                    <Title order={2}>{v.name}</Title>
                    <Text mb="xs">{v.salary} р/мес</Text>
                    <Text mb="sm">{v.descr}</Text>
                    <Link to={`/vacancy-card/${v.id}`}>
                      <Button color="green" size="md">
                        Перейти
                      </Button>
                    </Link>
                  </Card>
                ))}
            </SimpleGrid>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
