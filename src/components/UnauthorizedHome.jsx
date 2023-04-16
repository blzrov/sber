import { Card, SimpleGrid } from "@mantine/core";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UnauthorizedHome() {
  return (
    <div>
      <SimpleGrid cols={2}>
        <Link to="/auth">
          <Card
            shadow="sm"
            className="d-flex flex-column align-items-center"
            padding="lg"
            radius="md"
            withBorder
            style={{
              background: "linear-gradient(to right, rgba(225, 255, 0, 0.6), rgba(47, 238, 105, 0.6))",
              height: "300px",
              cursor: "pointer",
            }}
          >
            <h3>Для работодателей</h3>
            <p>Найди сотрудников в свою компанию!</p>
          </Card>
        </Link>
        <Link to="/auth">
          <Card
            shadow="sm"
            className="d-flex flex-column align-items-center"
            padding="lg"
            radius="md"
            withBorder
            style={{
              background: "linear-gradient(to right , rgba(47, 238, 105, 0.6), rgba(19, 246, 231, 0.6))",
              height: "300px",
              cursor: "pointer",
            }}
          >
            <h3>Для соискателей</h3>
            <p>Найди работы здесь и сейчас!</p>
            <p>Проверь свои навыки!</p>
          </Card>
        </Link>
        <Link to="/auth">
          <Card
            shadow="sm"
            className="d-flex flex-column align-items-center"
            padding="lg"
            radius="md"
            withBorder
            style={{
              background: "linear-gradient(to right, rgba(225, 255, 0, 0.6), rgba(47, 238, 105, 0.6))",
              height: "300px",
              cursor: "pointer",
            }}
          >
            <h3>Для заказчиков</h3>
            <p>Найди качественное решение для своей бизнес-задачи!</p>
          </Card>
        </Link>
        <Link to="/auth">
          <Card
            shadow="sm"
            className="d-flex flex-column align-items-center"
            padding="lg"
            radius="md"
            withBorder
            style={{
              background: "linear-gradient(to right , rgba(47, 238, 105, 0.6), rgba(19, 246, 231, 0.6))",
              height: "300px",
              cursor: "pointer",
            }}
          >
            <h3>Для менторов</h3>
            <p>Передай свой опыт!</p>
          </Card>
        </Link>
      </SimpleGrid>
    </div>
  );
}
