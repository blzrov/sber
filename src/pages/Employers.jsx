import { SimpleGrid, Card, Image, Title, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Employers() {
  return (
    <div>
      <h3>Компании</h3>
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
          <Link to="/employer/1">
            <Button color="green" size="md">
              Перейти
            </Button>
          </Link>
        </Card>
      </SimpleGrid>
    </div>
  );
}
