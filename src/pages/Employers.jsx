import { SimpleGrid, Card, Image, Title, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default function Employers() {
  return (
    <div>
      <h3>Компании</h3>
      <SimpleGrid cols={1} spacing="xl">
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="d-flex"
        >
          <Row>
            <Col md={4}>
              <Image height={200} />
            </Col>
            <Col md={8}>
              <Title order={2} className="mb-2">Frontend-разработка</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores amet deleniti ullam atque dignissimos! Quasi, sapiente
                beatae tempora cum quia ipsam unde incidunt soluta atque aperiam
                est voluptatum eos porro?
              </Text>
              <Text color="gray" fz='xl' fw={600} className="mb-2">
                100 вакансий
              </Text>
              <Link to="/employer/1">
                <Button color="green" size="md">
                  Перейти
                </Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </SimpleGrid>
    </div>
  );
}
