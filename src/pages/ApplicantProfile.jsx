import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

export default function ApplicantProfile() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/applicant/edit")}>Редактировать профиль</Button>
      <Row>
        <Col md={3}>Картинка</Col>
        <Col md={5}>
          <div>ФИО</div>
          <div>О себе</div>
        </Col>
        <Col md={3}>
          <div>ФИО</div>
          <div>О себе</div>
        </Col>
      </Row>
    </div>
  );
}
