import { SimpleGrid, Card, Image, Title, Text, Button } from "@mantine/core";
import { async } from "q";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vacancys() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://100.73.198.48:8000/api/vacancies/");
    const data = await response.json();
    setData(data);
  }, []);

  return (
    <div>
      <h3>Вакансии</h3>
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
          <Link to="/vacancy-card/1">
            <Button color="green" size="md">
              Перейти
            </Button>
          </Link>
        </Card>
      </SimpleGrid>
    </div>
  );
}
