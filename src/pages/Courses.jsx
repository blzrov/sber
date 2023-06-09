import { SimpleGrid, Card, Image, Title, Text, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "@mantine/core";
import { Row, Col } from "react-bootstrap";
import { Skeleton } from "@mantine/core";
import {BASE_URL} from "../api";

export default function Courses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(`${BASE_URL}/api/tests/`);
    const data = await response.json();
    setCourses(data);
    setLoading(false);
  }, []);

  return (
    <div>
      <Row className="mb-4">
        <Col md={4}>
          <h3>Все тесты</h3>
        </Col>
        <Col md={8} style={{ textAlign: "center" }}>
          <TextInput
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Поиск..."
            radius="xl"
            size="md"
          />
        </Col>
      </Row>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        {loading && (
          <SimpleGrid cols={3} spacing="xl">
            <Skeleton height={200} mb="xl" />
            <Skeleton height={200} mb="xl" />
            <Skeleton height={200} mb="xl" />
            <Skeleton height={200} mb="xl" />
            <Skeleton height={200} mb="xl" />
            <Skeleton height={200} mb="xl" />
          </SimpleGrid>
        )}
        <SimpleGrid cols={3} spacing="xl">
          {courses
            .filter((e) => e.name?.toLowerCase().includes(search) || e.descr?.toLowerCase().includes(search))
            .map((v, i) => (
              <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column" key={i}>
                <Card.Section mb="xs">
                  <Image src={v.img} height={200} />
                </Card.Section>
                <Title order={2} mb="sm">
                  {v.name}
                </Title>
                <Text className="mb-2">{v.descr}</Text>
                <Button onClick={() => navigate(`/courses/${v.id}`)} color="green" size="md" className="mt-auto">
                  Перейти
                </Button>
              </Card>
            ))}
        </SimpleGrid>
      </Card>
    </div>
  );
}
