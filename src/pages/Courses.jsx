import { SimpleGrid, Card, Image, Title, Text, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://100.73.198.48:8000/api/tests/");
    const data = await response.json();
    setCourses(data);
  }, []);

  return (
    <div>
      <h3>Направления</h3>
      <SimpleGrid cols={3} spacing="xl">
        {courses.map((v, i) => (
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="d-flex flex-column"
            key={i}
          >
            <Card.Section mb="xs">
              <Image height={200} />
            </Card.Section>
            <Title order={2} mb="sm">
              {v.name}
            </Title>
            <Text className="mb-2">
              {v.descr}
            </Text>
            <Button
              onClick={() => navigate(`/courses/${v.id}`)}
              color="green"
              size="md"
              className="mt-auto"
            >
              Перейти
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}
