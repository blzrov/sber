import { Row, Col } from "react-bootstrap";
import { Card } from "@mantine/core";
import { RingProgress } from "@mantine/core";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import KeyboardDoubleArrowUpTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowUpTwoTone";
import { Link } from "react-router-dom";

export default function ApplicantHome() {
  return (
    <div>
      <Row className="my-5">
        <Col>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Row>
              <Col>
                <h3>Мои достижения</h3>
              </Col>
              <Col>
                <RingProgress
                  size={140}
                  thickness={20}
                  roundCaps
                  sections={[
                    { value: 40, color: "cyan" },
                    { value: 15, color: "orange" },
                    { value: 15, color: "grape" },
                  ]}
                />
              </Col>
              <Col>
                <h3>Мои достижения</h3>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/employers">
            <Card
              shadow="sm"
              className="d-flex flex-column-reverse align-items-center justify-content-center"
              padding="lg"
              radius="md"
              withBorder
              style={{
                background: "linear-gradient(70deg , rgba(245, 241, 134, 0.6), rgba(252, 208, 0, 0.6))",
                height: "200px",
                cursor: "pointer",
              }}
            >
              <h3 style={{ textAlign: "center" }}>12 работодателей ищут сотрудников!</h3>
              <WorkHistoryIcon fontSize="large" />
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/orders">
            <Card
              shadow="sm"
              className="d-flex flex-column-reverse align-items-center justify-content-center"
              padding="lg"
              radius="md"
              withBorder
              style={{
                background: "linear-gradient(to left ,rgba(157, 251, 200, 0.6), rgba(252, 208, 0, 0.6))",
                height: "200px",
                cursor: "pointer",
              }}
            >
              <h3>Фриланс!</h3>
              <PublicTwoToneIcon fontSize="large" />
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/courses">
            <Card
              shadow="sm"
              className="d-flex flex-column-reverse align-items-center justify-content-center"
              padding="lg"
              radius="md"
              withBorder
              style={{
                background: "linear-gradient(70deg ,rgba(157, 251, 200, 0.6), rgba(152, 222, 91, 0.6))",
                height: "200px",
                cursor: "pointer",
              }}
            >
              <h3>Проверь свои скиллы!</h3>
              <KeyboardDoubleArrowUpTwoToneIcon fontSize="large" />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
