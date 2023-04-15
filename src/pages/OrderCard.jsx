import { Button } from "@mantine/core";
import { Row, Col } from "react-bootstrap";

export default function OrderCard() {
  return (
    <div>
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center">Название заказа</h2>
          <p>Заказчик</p>
          <p>ФИО Заказчика</p>
          <p>10000р.</p>
          <p>16.04.2023</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            nostrum illo nisi sed dignissimos blanditiis quasi repellat ea.
            Magni quibusdam iste porro repellat unde. A nemo amet ipsum totam.
            In.
          </p>
          <Button color="green" className="w-100">Откликнуться</Button>
        </Col>
      </Row>
    </div>
  );
}
