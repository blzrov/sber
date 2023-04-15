import { Row, Col } from "react-bootstrap";
import { Text, Title, Tabs, SimpleGrid, Card, Button } from "@mantine/core";

export default function CustomerProfile() {
  return (
    <div>
      <Row className="mb-4">
        <Col>
          <Title order={1} className="mb-1">
            Сбербанк
          </Title>
          <Text mb="xs">ФИО Заказчика</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            distinctio ullam illo facilis reprehenderit non quibusdam inventore
            debitis odit nostrum saepe, ex excepturi qui. Sunt dolor ratione ab
            dolores iure!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore necessitatibus ullam maxime commodi impedit a
                  asperiores eaque officia. Repudiandae cum velit iusto quas
                  quia, earum omnis nostrum tempora qui labore.
                </Text>
                <Button color="green">Откликнуться</Button>
              </Card>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={3}>Название</Title>
                <Title order={5}>10000р.</Title>
                <Text mb="xs">Дедлайн: 16.04.2023</Text>
                <Text mb="md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore necessitatibus ullam maxime commodi impedit a
                  asperiores eaque officia. Repudiandae cum velit iusto quas
                  quia, earum omnis nostrum tempora qui labore.
                </Text>
                <Button color="green">Откликнуться</Button>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore necessitatibus ullam maxime commodi impedit a
                  asperiores eaque officia. Repudiandae cum velit iusto quas
                  quia, earum omnis nostrum tempora qui labore.
                </Text>
              </Card>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={3}>Название</Title>
                <Title order={5}>10000р.</Title>
                <Text mb="xs">Дедлайн: 16.04.2023</Text>
                <Text mb="md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore necessitatibus ullam maxime commodi impedit a
                  asperiores eaque officia. Repudiandae cum velit iusto quas
                  quia, earum omnis nostrum tempora qui labore.
                </Text>
              </Card>
            </SimpleGrid>
          </Tabs.Panel>
        </Tabs>
      </Row>
    </div>
  );
}
