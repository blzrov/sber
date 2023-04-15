import { SimpleGrid, Card, Image, Title, Text, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([])

  useEffect(async () => {
    const response = await fetch("http://100.73.198.48:8000/api/courses/");
    const data = await response.json()
    console.log(data)
  }, [])
  

  return (
    <div>
      <h3>Направления</h3>
      <SimpleGrid cols={3} spacing="xl">
        <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
          <Card.Section mb="xs">
            <Image height={200} />
          </Card.Section>
          <Title order={2} mb="sm">
            Frontend-разработка
          </Title>
          <Text mb="sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores amet deleniti ullam atque dignissimos!
            Quasi, sapiente beatae tempora cum quia ipsam unde incidunt soluta atque aperiam est voluptatum eos porro?
          </Text>
          <Button onClick={() => navigate("/courses/1")} color="green" size="md">
            Перейти
          </Button>
        </Card>
      </SimpleGrid>
    </div>
  );
}
