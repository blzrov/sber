import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ApplicantProfile() {
  return (
    <div>
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
