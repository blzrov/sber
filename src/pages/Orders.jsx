import { SimpleGrid, Card, Image, Title, Text, Button, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Orders() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Row className="mb-4">
        <Col md={4}>
          <h3>Найти заказ</h3>
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
      <SimpleGrid cols={3} spacing="xl">
        <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
          <Card.Section mb="xs">{/* <Image height={200} /> */}</Card.Section>
          <Title order={2} mb="sm">
            Реализовать пару таблиц на Vue
          </Title>
          <Text mb="sm">
            Каждая заметка имеет название и список задач todo list, (далее - Todo). Каждый пункт Todo состоит из
            чекбокса и относящейся к нему текстовой подписи. - А вот и первая сложность, у нас будет два уровня
            абстракции: множество заметок и множество дел, которые составляют заметку.
          </Text>
          <Link to="/order-card/1">
            <Button color="green" size="md">
              Перейти
            </Button>
          </Link>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
          <Card.Section mb="xs">{/* <Image height={200} /> */}</Card.Section>
          <Title order={2} mb="sm">
            Написать лк к 1С
          </Title>
          <Text mb="sm">
            российская компания, основанная в 1991 году и занимающаяся разработкой, изданием и поддержкой компьютерных
            программ, баз данных делового и домашнего назначения, а также компьютерных игр.
          </Text>
          <Link to="/order-card/1">
            <Button color="green" size="md">
              Перейти
            </Button>
          </Link>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
          <Card.Section mb="xs">{/* <Image height={200} /> */}</Card.Section>
          <Title order={2} mb="sm">
            Отрефакторить реакт
          </Title>
          <Text mb="sm">
          </Text>
          <Link to="/order-card/1">
            <Button color="green" size="md">
              Перейти
            </Button>
          </Link>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
          <Card.Section mb="xs">{/* <Image height={200} /> */}</Card.Section>
          <Title order={2} mb="sm">
            Сверстать 6 макетов по фигме
          </Title>
          <Text mb="sm">
          https://www.figma.com/community
          </Text>
          <Link to="/order-card/1">
            <Button color="green" size="md">
              Перейти
            </Button>
          </Link>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder className="d-flex flex-column">
          <Card.Section mb="xs">{/* <Image height={200} /> */}</Card.Section>
          <Title order={2} mb="sm">
            Написать простую форму
          </Title>
          <Text mb="sm">
          Элементы формы представляют собой различные типы входных элементов, такие как текстовые поля, флажки, переключатели, кнопки отправки и многое другое.
          </Text>
          <Link to="/order-card/1">
            <Button color="green" size="md">
              Перейти
            </Button>
          </Link>
        </Card>
      </SimpleGrid>
    </div>
  );
}
