import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../helpers/user";

export default function ApplicantProfile() {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await fetch(`http://100.73.198.48:8000/api/user/${id}`);
    const data = await response.json();
    setInfo(data);
    console.log(data);
  }, []);

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col md={3}>
          <div>
            <img src={info.img} height={230} style={{maxWidth: '300px'}}/>
          </div>
        </Col>
        <Col md={9} style={{paddingLeft: '30px'}}>
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <h3>Личная информация</h3>
                {getUser()?.id == id && (
                  <Button onClick={() => navigate("/applicant/edit")}>
                    Редактировать профиль
                  </Button>
                )}
              </div>
              <div
                style={{ fontSize: "20px" }}
              >{`${info.surname} ${info.name} ${info.patronymic}`}</div>
              <div style={{ color: "gray" }}>
                Возраст: {new Date().getFullYear() - 2003} лет
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <h3>Подробнее о вас</h3>
            <div>
              <b>О себе:</b> {info.descr}
            </div>
            <div>
              <b>Ваши навыки: {['HTML', 'CSS', 'JavaScript', 'TypeScript','React'].map((v,i) => <Badge size="md" style={{marginLeft: '10px'}}>{v}</Badge>)}</b>
            </div>
            <div>
              <b>Город:</b> {info.city}
            </div>
            <div>
              <b>Профессия:</b> {info.profession}
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
