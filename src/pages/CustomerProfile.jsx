import { Row, Col } from "react-bootstrap";
import { Text, Title, Tabs, SimpleGrid, Card, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function CustomerProfile() {
  const navigate = useNavigate();

  return (
    <div>
      <Row className="mb-4">
        <Col md={10}>
          <Title order={1} className="mb-1">
            Сбербанк
          </Title>
          <Text mb="xs">ФИО Заказчика</Text>
        </Col>
        <Col md={2}>
          <Button onClick={() => navigate("/customer/edit")} color="green">
            Редакировать профиль
          </Button>
          <Button onClick={() => navigate("/create-order")} color="green">
            Создать заказ
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio ullam illo facilis reprehenderit
            non quibusdam inventore debitis odit nostrum saepe, ex excepturi qui. Sunt dolor ratione ab dolores iure!
          </Text>
        </Col>
      </Row>
      <Row>
        <Tabs defaultValue="actual">
          <Tabs.List grow>
            <Tabs.Tab value="actual">Акутальные заказы</Tabs.Tab>
            <Tabs.Tab value="history">История заказов</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="actual">
            <SimpleGrid cols={1} mt="xl">
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={3}>Название</Title>
                <Title order={5}>10000р.</Title>
                <Text mb="xs">Дедлайн: 16.04.2023</Text>
                <Text mb="md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus ullam maxime commodi
                  impedit a asperiores eaque officia. Repudiandae cum velit iusto quas quia, earum omnis nostrum tempora
                  qui labore.
                  <Text mb="md">Исполнитель не назначен</Text>
                </Text>
                <Button
                  color="green"
                  onClick={() => {
                    navigate("/order-card/1");
                  }}
                >
                  Подробнее
                </Button>
              </Card>
            </SimpleGrid>
          </Tabs.Panel>
          <Tabs.Panel value="history">
            <SimpleGrid cols={1} mt="xl">
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={3}>Название</Title>
                <Title order={5}>10000р.</Title>
                <Text mb="xs">Дедлайн: 16.04.2023</Text>
                <Text mb="md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus ullam maxime commodi
                  impedit a asperiores eaque officia. Repudiandae cum velit iusto quas quia, earum omnis nostrum tempora
                  qui labore.
                </Text>
                <Text mb="md">Исполнитель</Text>
                <Button>Оценить</Button>
              </Card>
            </SimpleGrid>
          </Tabs.Panel>
        </Tabs>
      </Row>
    </div>
  );
}
