import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SimpleGrid, Button, Card } from "@mantine/core";
import { nprogress, NavigationProgress } from "@mantine/nprogress";
import { Radio } from "@mantine/core";
import { Progress } from "@mantine/core";

export default function Test() {
  return (
    <div>
      <NavigationProgress color="green" initialProgress={10} />
      <Row>
        <Col md={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h3>Название теста</h3>
            <SimpleGrid cols={5}>
              <div style={pageStyleSuccess}>1</div>
              <div style={pageStyleSuccess}>1</div>
              <div style={pageStyle}>1</div>
              <div style={pageStyle}>1</div>
              <div style={pageStyle}>1</div>
              <div style={pageStyle}>1</div>
              <div style={pageStyle}>1</div>
              <div style={pageStyleActive}>1</div>
              <div style={pageStyle}>1</div>
              <div style={pageStyle}>1</div>
            </SimpleGrid>
            <Progress className="mt-3" color="green" radius="xs" size="xl" value={50} striped animate />
            <Button className="mt-3" disabled>
              Закончить
            </Button>
          </Card>
        </Col>
        <Col md={8}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h4>Вопрос 8</h4>
            <div>Картинка</div>
            <div>Вопрос</div>
            <h6>Выберите верный вариант ответа:</h6>
            <Radio.Group name="" label="">
              <SimpleGrid cols={1}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Radio value="rea4ct" label="React" />
                </Card>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Radio value="re3act" label="React" />
                </Card>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Radio value="rea1ct" label="React" />
                </Card>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Radio value="rea2ct" label="React" />
                </Card>
              </SimpleGrid>
            </Radio.Group>
            <Button color="green" className="mt-4">
              Подтвердить
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

const pageStyle = {
  backgroundColor: "white",
  textAlign: "center",
  padding: "15px 10px",
  cursor: "pointer",
  border: "2px solid #2b8a3e",
  borderRadius: "5px",
};
const pageStyleSuccess = {
  backgroundColor: "##2b8a3e",
  textAlign: "center",
  padding: "15px",
  cursor: "pointer",
  borderRadius: "5px",
};
const pageStyleActive = {
  backgroundColor: "blue",
  textAlign: "center",
  padding: "15px",
  cursor: "pointer",
  color: "white",
  borderRadius: "5px",
};
