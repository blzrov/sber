import { Button, Center } from "@mantine/core";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function MentorProfile() {
const navigate = useNavigate()

  return (
    <div>
      <Row>
        <Col md={8} className="mx-auto" style={{fontSize: '20px'}}>
          <h3 className="text-center" style={{fontSize: '34px'}}>Белозеров Денис Батькович</h3>
          <div className="mb-1"><b>Направление:</b> Frontend-разработка</div>
          <div className="mb-1"><b>О себе:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam ab, magnam cum eius nostrum quidem sed distinctio quis doloribus! Dolorem perferendis cupiditate enim deleniti facilis corrupti quos harum ut?</div>
          <div className="mb-3"><b>Контакты:</b> +79096068233</div>
          <Center>
            <Button size='md' variant="light" onClick={() => navigate('/mentor/edit')}>Редактировать профиль</Button>
          </Center>
        </Col>
      </Row>
    </div>
  );
}
