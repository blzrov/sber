import { Button, Center } from "@mantine/core";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function MentorProfile() {
const navigate = useNavigate()

  return (
    <div>
      <Row>
        <Col md={8} className="mx-auto" style={{fontSize: '20px'}}>
          <h3 className="text-center" style={{fontSize: '34px'}}>Сковородников Даниил Александрович</h3>
          <div className="mb-1"><b>Направление:</b> Frontend-разработка</div>
          <div className="mb-1"><b>О себе:</b> Работаю software engineer 15+ лет с фокусом на фронтенд. Работал как в небольших стартапах, так и в больших корпорациях: e-commerce, мессенджер, финтех, crm системы.</div>
          <div className="mb-3"><b>Контакты:</b> +79096068233</div>
          <Center>
            <Button size='md' variant="light" onClick={() => navigate('/mentor/edit')}>Редактировать профиль</Button>
          </Center>
        </Col>
      </Row>
    </div>
  );
}
