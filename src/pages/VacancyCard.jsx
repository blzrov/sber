import { Button } from "@mantine/core";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { maxWidth } from "@material-ui/system";
import { async } from "q";

export default function VacancyCard() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const response = await fetch(`http://100.73.198.48:8000/api/vacancy/${id}/`);
    const data = await response.json();
    setData(data);
  }, []);

  async function onRespond() {}

  return (
    <div>
      <Row>
        <Col md={4} className="mx-auto">
          <img className="mb-2" src={data.img} style={{ maxWidth: "100%" }} />
          <Link to={`/employer/${data.employer_id}`}>
            <h1>{data.employer_name}</h1>
          </Link>
        </Col>
        <Col md={8} className="mx-auto">
          <h1>{data.name}</h1>
          <h3>{data.salary}р./мес.</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>{data.descr}</p>
          <Button onClick={onRespond} color="green" className="w-100">
            Откликнуться
          </Button>
        </Col>
      </Row>
    </div>
  );
}
